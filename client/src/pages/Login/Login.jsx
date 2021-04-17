import React from 'react';
import { Form, Tabs, Input, Button, } from 'antd';

import 'antd/dist/antd.css';
import Header from '../../components/Header/Header'

function Login() {
  const layout = {
    wrapperCol: {
      span: 24,
    },
  };
  const tailLayout = {
    wrapperCol: {

    },

  };
  const { TabPane } = Tabs
  return (
    <>
      <Header />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>

        <Tabs defaultActiveKey="1" style={{ width: '600px' }}>
          <TabPane tab="Login" key="1">
            <Form
              {...layout}
              name="basic"
              type="flex"
              justify="center"
              align="middle"
              initialValues={{
                remember: true,
              }}
            // onFinish={}
            >
              <Form.Item
                className="form-in"
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input placeholder="Nhập email/ tên tài khoản..." />
              </Form.Item>

              <Form.Item
                className="form-in"
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input.Password placeholder="Nhập mật khẩu..." />
              </Form.Item>
              <Form.Item {...tailLayout}>
                <Button className="btn-signin" type="primary" htmlType="submit">
                  Đăng Nhập
              </Button>
              </Form.Item>
            </Form>
          </TabPane>

          <TabPane tab="Register" key="2">
            <Form
              {...layout}
              type="flex"
              justify="center"
              align="middle"
              name="basic"
              initialValues={{
                remember: true,
              }}
              // onFinish={onFinishReg}
              scrollToFirstError
            >
              <Form.Item
                className="form-in"
                name="hoten"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng điền họ tên vào khung',
                  },
                ]}
              >
                <Input placeholder="Nhập họ tên của bạn..." />
              </Form.Item>

              <Form.Item
                className="form-in"
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập tên tài khoản bạn muốn tạo',
                  },
                ]}
              >
                <Input placeholder="Nhập tên tài khoản..." />
              </Form.Item>

              <Form.Item
                className="form-in"
                name="email"
                rules={[
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!',
                  },
                ]}
              >
                <Input placeholder="Nhập email của bạn..." />
              </Form.Item>

              <Form.Item
                name="password"
                className="form-in"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
                hasFeedback
              >
                <Input.Password placeholder="Nhập mật khẩu..." />
              </Form.Item>

              <Form.Item
                name="confirm"
                className="form-in"
                dependencies={['password']}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập lại mật khẩu',
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('Mật khẩu bạn vừa nhập không khớp với mật khẩu trước đó!'));
                    },
                  }),
                ]}
              >
                <Input.Password placeholder="Xác nhận mật khẩu..." />
              </Form.Item>

              <Form.Item
                className="form-in"
                name="sodienthoai"
                rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}
              >
                <Input placeholder="Nhập số điện thoại" addonBefore="+84" style={{ width: '100%' }} />
              </Form.Item>

              <Form.Item
                className="form-in"
                name="diachi"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập địa chỉ!',
                  },
                ]}
              >
                <Input placeholder="Nhập địa chỉ..." />
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button className="btn-signin" type="primary" htmlType="submit">
                  Đăng Ký
                            </Button>
              </Form.Item>
            </Form>
          </TabPane>
        </Tabs>
      </div>
    </>
  );
}

export default Login;