export default class Building {
    constructor(sqft) {
      this._sqft = sqft;
    }
  
    get sqft() {
      return this._sqft;
    }
  }
  
  Building.prototype.evacuationWarningMessage = function() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  };  