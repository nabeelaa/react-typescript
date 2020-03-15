import React from 'react';
import MessageHoc from './Hoc';

const example = (prop: any): any => (
  <p>
    Hey, {prop.name}! {prop.message}
  </p>
);

const Message = MessageHoc(example);

export default Message;
