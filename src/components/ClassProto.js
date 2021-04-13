import React, { Component } from 'react';

class ClassProto extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    //ES5 prototype
    var CountFunc = (function () {
      function Count(num) {
        this.number = num;
      }
      Count.prototype.showNum = function() {
        console.log('1. react_', this.number);
      };
      return Count;
    }());

    var cnt = new CountFunc('200');
    cnt.showNum();

    //ES6 class
    class CountClass {
      constructor(num2) {
        this.number2 = num2;
      }
      showNum() {
        console.log(`2. react_${this.number2}`);
      }
    }

    var cnt2 = new CountClass('2hundred');
    cnt2.showNum();
  }

  render() {
    return (
      <h2>[THIS IS Class]</h2>
    );
  }
}

export default ClassProto;