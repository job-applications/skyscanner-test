/* eslint no-use-before-define:0 */
const _ = require('lodash');
const util = require('util');

class ClientSearchResult {
  constructor() {
    this.Itineraries = {};
    this.AgentLookup = {};
    this.CarrierLookup = {};
    this.PlaceLookup = {};
    this.LegLookup = {};
    this.SegmentLookup = {};
  }

  importResult(result) {
    if ( result ){
      this._buildLookupTypes(result);
    }
    else {
      console.warn("No data presented to parse result");
    }
  }

  getLeanItineraries() {
    return _.map(this.Itineraries, (It, Index) => this.getLeanItinerary(It, Index));
  }

  getLeanItinerary(It, Index) {
    return {
      Index: Index,
      OutboundLeg: this.getLeanLeg(It.OutboundLegId),
      InboundLeg: this.getLeanLeg(It.InboundLegId),
      PriceOption: this.getLeanItineraryPrice(It.PricingOptions)
    }
  }

  getLeanLeg(legId) {
    let leg = this.LegLookup[legId];

    if ( leg ){
      return {
        Departure: leg.Departure,
        Arrival: leg.Arrival,
        Duration: leg.Duration,
        Origin: this.getPlace(leg.OriginStation),
        Destination: this.getPlace(leg.DestinationStation),
        Carrier: this.getCarrier(_.first(leg.Carriers)),
        Segments: this.getSegments(leg.SegmentIds),
      }
    }

    return null;
  }

  // This appears to be sorted by price already but...
  getLeanItineraryPrice(pricing) {
    let sorted = _.sortBy(pricing, 'Price');
    let bestPrice = _.first(sorted) || {};

    return {
      Price: bestPrice.Price,
      Agents: this.getAgentNames(bestPrice.Agents),
    }
  }

  getSegments(segmentIds) {
    return _.map(segmentIds, (id) => this.getSegment(id));
  }

  getSegment(segmentId){
    let segment = this.SegmentLookup[segmentId];

    if ( segment ){
      return {
        Departure: segment.DepartureDateTime,
        Arrival: segment.ArrivalDateTime,
        Duration: segment.Duration,
        Origin: this.getPlace(segment.OriginStation),
        Destination: this.getPlace(segment.DestinationStation),
        Carrier: this.getCarrier(segment.Carrier)
      }
    }

    return null;
  }

  getCarrier(carrierId) {
    let carrier = this.CarrierLookup[carrierId];

    if ( carrier ){
      return _.pick(carrier, ['Name', 'DisplayCode']);
    }

    return {
      Name: carrierId,
      DisplayCode: carrierId
    };
  }

  getPlace(placeId){
    let place = this.PlaceLookup[placeId];

    if (place) {
      return _.pick(place, ['Code', 'Name']);
    }

    return { Code: placeId, Name: placeId };
  }

  getAgentNames(agentIds){
    return _.map(agentIds, (id) => this.getAgentName(id));
  }

  getAgentName(agendId) {
    return (this.AgentLookup[agendId] || {}).Name || agendId;
  }

  // Internal Methods
  _buildLookupTypes(data){
    this.Itineraries = data.Itineraries;
    this.AgentLookup = this._buildLookupType(data.Agents);
    this.CarrierLookup = this._buildLookupType(data.Carriers);
    this.PlaceLookup = this._buildLookupType(data.Places);
    this.LegLookup = this._buildLookupType(data.Legs);
    this.SegmentLookup = this._buildLookupType(data.Segments);

    //console.log(`There are ${ Object.keys(this.Itineraries).length } of ${ data.Itineraries.length } Itineraries`);
  }

  _buildLookupType(data) {
    let lookup = {};

    _.each(data, (value) => {
      if ( value.Id !== null ){
        lookup[value.Id] = value
      }
    });

    return lookup;
  }

  static getLeanResult(result) {
    let instance = new this();
    instance.importResult(result);
    let itineraries = instance.getLeanItineraries();
    //console.log(util.inspect(_.first(itineraries), false, null));
    return itineraries;
  }
}

module.exports = ClientSearchResult;
