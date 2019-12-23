import React, { FormEvent } from 'react';
import { Form, Input, Icon, Button, Tabs } from 'antd';
import { InputProps } from 'antd/lib/input';
import { FormComponentProps, WrappedFormUtils } from 'antd/lib/form/Form';

import loginBoxStyles from './login.less';

const FormItem = Form.Item;
const { TabPane } = Tabs;

//Input的默认属性
const InputDefaultProps: InputProps = {
    size: 'large',
    prefix: <Icon type='user' className={loginBoxStyles.prefixIcon} />
}

export interface OnSubmit {
    (e: FormEvent, form: WrappedFormUtils): void;
}

//antd的form是泛型，要再改
export interface LoginProps extends FormComponentProps {
    activeKey: string;
    submitting: boolean;
    onSubmit: OnSubmit;
    onTabsChange: (key: string) => void;
}

export function Login(props: LoginProps) {
    const { form, onTabsChange, onSubmit, activeKey, submitting } = props;
    const { getFieldDecorator } = form;

    return (
        <div className={loginBoxStyles.main}>
            <Form onSubmit={e => onSubmit(e, form)}>
                <Tabs
                    activeKey={activeKey}
                    onChange={onTabsChange}
                    className={loginBoxStyles.tabs}
                >
                  <TabPane tab='账号密码登录' key='account'>
                    <FormItem>
                      {getFieldDecorator('userName', {
                        rules: [
                          {
                            required: true,
                            message: '用户名不能为空'
                          }
                        ],
                      })(
                        <Input {...InputDefaultProps} placeholder='请输入用户名' />
                      )}
                    </FormItem>
                    <FormItem>
                      {getFieldDecorator('password', {
                        rules: [
                          {
                            required: true,
                            message: '用户名不能为空'
                          }
                        ],
                      })(
                        <Input {...InputDefaultProps} placeholder='请输入密码' type='password' />
                      )}
                    </FormItem>
                  </TabPane>
                </Tabs>
                <FormItem>
                  <Button
                    size='large'
                    type='primary'
                    htmlType='submit'
                    loading={submitting}
                    className={loginBoxStyles.submit}
                  >
                    登录
                  </Button>
                </FormItem>
            </Form>
        </div>
    );
}