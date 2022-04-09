// import React, { useState } from 'react';
// import { Form, DatePicker, TimePicker, Button } from 'antd';
// import { Component } from '../component/component';
// const { RangePicker } = DatePicker;
// const formItemLayout = {
//     labelCol: {
//         xs: {
//             span: 24,
//         },
//         sm: {
//             span: 8,
//         },
//     },
//     wrapperCol: {
//         xs: {
//             span: 24,
//         },
//         sm: {
//             span: 16,
//         },
//     },
// };
// const config = {
//     rules: [
//         {
//             type: 'object',
//             required: true,
//             message: 'Please select time!',
//         },
//     ],
// };





// const Addevent = () => {
//     const onFinish = (fieldsValue) => {
//         // Should format date value before submit.
//         const rangeValue = fieldsValue['range-picker'];
//         const rangeTimeValue = fieldsValue['range-time-picker'];
//         const values = {
//             ...fieldsValue,
//             'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
//             'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
//             'month-picker': fieldsValue['month-picker'].format('YYYY-MM'),
//             'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
//             'range-time-picker': [
//                 rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
//                 rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss'),
//             ],
//             'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
//         };
//         console.log('Received values of form: ', fieldsValue);
//     };
//     return (
//         <Component>
//             <Form name="time_related_controls" {...formItemLayout} onFinish={onFinish}>
//                 <Form.Item name="date-picker" label="DatePicker" {...config}>
//                     <DatePicker />
//                 </Form.Item>
               
//                 <Form.Item name="time-picker" label="TimePicker" {...config}>
//                     <TimePicker />
//                 </Form.Item>
//                 <Form.Item
//                     wrapperCol={{
//                         xs: {
//                             span: 24,
//                             offset: 0,
//                         },
//                         sm: {
//                             span: 16,
//                             offset: 8,
//                         },
//                     }}
//                 >
//                     <Button type="primary" htmlType="submit">
//                         Submit
//                     </Button>
//                 </Form.Item>
//             </Form>
//         </Component>
//     )
// }

// export default Addevent;
