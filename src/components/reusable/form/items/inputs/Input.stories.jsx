import Input from "./Input.jsx";

export default {
  title: 'Components/Forms/Input',
  component: Input,
  tags: ['autodocs'],
  decorators: [story => <div style={{ maxWidth: '500px' }}>{story()}</div>],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text for the input',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    multiValidation: {
      control: 'array',
      description: 'Array of validation error messages',
    },
    name: {
      control: 'text',
      description: 'Name attribute for the input',
    },
    alterAction: {
      control: 'text',
      description: 'Additional action text or element',
    },
    inactive: {
      control: 'boolean',
      description: 'Whether the input should be inactive',
    },
    register: {
      control: 'object',
      description: 'Registration function for input props',
    },
  },
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default Input',
  placeholder: 'Enter text here...',
  name: 'default-input',
  register: () => ({}),
};

export const WithCustomClass = Template.bind({});
WithCustomClass.args = {
  label: 'Input with Custom Class',
  placeholder: 'Enter text here...',
  className: 'custom-class',
  name: 'custom-class-input',
  register: () => ({}),
};


export const ErrorInput = Template.bind({});
ErrorInput.args = {
  ...Default.args,
  className: '_form-error',
}

export const SuccessInput = Template.bind({});
SuccessInput.args = {
  ...Default.args,
  className: '_form-success',
}

export const WarningInput = Template.bind({});
WarningInput.args = {
  ...Default.args,
  className: '_form-warning',
}