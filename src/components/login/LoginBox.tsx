import React, { FormEvent } from 'react';
import { Form, Input, Icon, Button, Tabs } from 'antd';
import { InputProps } from 'antd/lib/input';
import { FormComponentProps, WrappedFormUtils } from 'antd/lib/form/Form';

const FormItem = Form.Item;
const { TabPane } = Tabs;

const InputDefaultProps: InputProps = {
    size: 'large',
    prefix: <Icon type='user' />
}

export interface OnSubmit {
    (e: FormEvent, form: WrappedFormUtils): void;
}

//antd的form是泛型，要再改
export interface LoginPros extends FormComponentProps {
    activeKey: string;
    submitting: boolean;
    onSubmit: OnSubmit;
    onTabsChange: (key: string) => void;
}