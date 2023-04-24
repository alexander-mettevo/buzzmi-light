import Button from "./Button.jsx";

export default {
  title: 'Components/Buttons/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Button text',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    onClick: {
      action: 'clicked',
      description: 'Click event handler',
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default Button',
  className: '',
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Button',
  className: '_fw button_primary btn-text',
}

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary Button',
  className: 'button_secondary  btn-text',
}

export const AltPrimary = Template.bind({});
AltPrimary.args = {
  children: 'AltPrimary Button',
  className: '_fw button_alt-primary  text-r',
}

export const Regular = Template.bind({});
Regular.args = {
  children: 'Regular Button',
  className: 'button_regular',

}