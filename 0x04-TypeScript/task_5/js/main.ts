interface MajorCredits {
    credits: number;
    _majorBrand: unique symbol;
  }
  
  interface MinorCredits {
    credits: number;
    _minorBrand: unique symbol;
  }
  
  function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return { credits: subject1.credits + subject2.credits, _majorBrand: Symbol() };
  }
  
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return { credits: subject1.credits + subject2.credits, _minorBrand: Symbol() };
  }