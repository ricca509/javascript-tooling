interface PointType {
  a: number;
  b: number;
}

class TypedPoint {
  static calculate(sumObject: PointType) {
    return sumObject?.a + sumObject?.b;
  }
}


