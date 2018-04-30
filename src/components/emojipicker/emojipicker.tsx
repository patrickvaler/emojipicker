import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'emoji-picker',
  styleUrl: 'emojipicker.scss',
  shadow: true
})
export class Emojipicker {

  @Prop() first: string;
  @Prop() last: string;

  render() {
    return (
      <div>
        Hello, World! I'm {this.first} {this.last}
      </div>
    );
  }
}
