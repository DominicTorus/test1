"use client";

import React, { useState } from "react";
import { Button } from "@/components/Button";
import { Avatar } from "@/components/Avatar";
import { Card } from "@/components/Card";
import { Checkbox } from "@/components/Checkbox";
import { Switch } from "@/components/Switch";
import { TextInput } from "@/components/TextInput";
import { Select } from "@/components/Select";
import { Modal } from "@/components/Modal";
import { Icon } from "@/components/Icon";
import { Text } from "@/components/Text";
import { Slider } from "@/components/Slider";
import { Progress } from "@/components/Progress";
import { Radio } from "@/components/Radio";
import { RadioButton } from "@/components/RadioButton";
import { RadioGroup } from "@/components/RadioGroup";
import { Label } from "@/components/Label";
import { Table } from "@/components/Table";
import { TextArea } from "@/components/TextArea";
import { DatePicker } from "@/components/DatePicker";
import { Tabs } from "@/components/Tabs";
import { Pagination } from "@/components/Pagination";
import { Dropdown } from "@/components/Dropdown";
import { Spin } from "@/components/Spin";
import { PinInput } from "@/components/PinInput";
import { Image } from "@/components/Image";
import { List } from "@/components/List";
import { Menu } from "@/components/Menu";
import { Popup, usePopup } from "@/components/Popup";

export default function ComponentShowcase() {
  // State management
  const [modalOpen, setModalOpen] = useState(false);
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [switchValue, setSwitchValue] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [sliderValue, setSliderValue] = useState(50);
  const [radioValue, setRadioValue] = useState("");
  const [textAreaValue, setTextAreaValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [activeTab, setActiveTab] = useState("tab1");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [dropdownValue, setDropdownValue] = useState("");
  const [pinValue, setPinValue] = useState("");
  const [tableSelection, setTableSelection] = useState<string[]>([]);
  const [selectedSection, setSelectedSection] = useState("button");

  // Popup state
  const { isOpen, anchorRef, openPopup, closePopup } = usePopup();

  // Component sections for navigation
  const sections = [
    { id: "button", name: "Button", category: "Actions" },
    { id: "avatar", name: "Avatar", category: "Display" },
    { id: "card", name: "Card", category: "Layout" },
    { id: "checkbox", name: "Checkbox", category: "Inputs" },
    { id: "switch", name: "Switch", category: "Inputs" },
    { id: "textinput", name: "TextInput", category: "Inputs" },
    { id: "textarea", name: "TextArea", category: "Inputs" },
    { id: "select", name: "Select", category: "Inputs" },
    { id: "dropdown", name: "Dropdown", category: "Inputs" },
    { id: "datepicker", name: "DatePicker", category: "Inputs" },
    { id: "pininput", name: "PinInput", category: "Inputs" },
    { id: "slider", name: "Slider", category: "Inputs" },
    { id: "radio", name: "Radio", category: "Inputs" },
    { id: "modal", name: "Modal", category: "Overlay" },
    { id: "popup", name: "Popup", category: "Overlay" },
    { id: "icon", name: "Icon", category: "Display" },
    { id: "text", name: "Text", category: "Typography" },
    { id: "image", name: "Image", category: "Display" },
    { id: "label", name: "Label", category: "Display" },
    { id: "progress", name: "Progress", category: "Feedback" },
    { id: "spin", name: "Spin", category: "Feedback" },
    { id: "table", name: "Table", category: "Data" },
    { id: "list", name: "List", category: "Data" },
    { id: "tabs", name: "Tabs", category: "Navigation" },
    { id: "menu", name: "Menu", category: "Navigation" },
    { id: "pagination", name: "Pagination", category: "Navigation" },
  ];

  const categories = Array.from(new Set(sections.map(s => s.category)));

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Text variant="header-1" color="brand">
            Component Showcase
          </Text>
          <Text variant="body-2" color="secondary" className="mt-1">
            Explore all available components with their various props and configurations
          </Text>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar Navigation */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-6">
              {categories.map(category => (
                <div key={category}>
                  <Text variant="caption-1" color="secondary" className="mb-2 uppercase font-semibold">
                    {category}
                  </Text>
                  <nav className="space-y-1">
                    {sections.filter(s => s.category === category).map(section => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedSection(section.id);
                          document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                          selectedSection === section.id
                            ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                      >
                        {section.name}
                      </a>
                    ))}
                  </nav>
                </div>
              ))}
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 space-y-16">
            {/* Button Component */}
            <section id="button" className="scroll-mt-24">
              <Card view="outlined" size="l" className="p-8">
                <Text variant="display-1" color="brand" className="mb-6">Button</Text>

                <div className="space-y-8">
                  <div>
                    <Text variant="subheader-2" color="secondary" className="mb-4">Views</Text>
                    <div className="flex flex-wrap gap-3">
                      <Button view="normal">Normal</Button>
                      <Button view="action">Action</Button>
                      <Button view="outlined">Outlined</Button>
                      <Button view="outlined-info">Info</Button>
                      <Button view="outlined-success">Success</Button>
                      <Button view="outlined-warning">Warning</Button>
                      <Button view="outlined-danger">Danger</Button>
                      <Button view="flat">Flat</Button>
                      <Button view="flat-info">Flat Info</Button>
                      <Button view="flat-success">Flat Success</Button>
                      <Button view="flat-warning">Flat Warning</Button>
                      <Button view="flat-danger">Flat Danger</Button>
                      <Button view="raised">Raised</Button>
                    </div>
                  </div>

                  <div>
                    <Text variant="subheader-2" color="secondary" className="mb-4">Sizes</Text>
                    <div className="flex flex-wrap items-center gap-3">
                      <Button size="xs">XS</Button>
                      <Button size="s">S</Button>
                      <Button size="m">M</Button>
                      <Button size="l">L</Button>
                      <Button size="xl">XL</Button>
                    </div>
                  </div>

                  <div>
                    <Text variant="subheader-2" color="secondary" className="mb-4">Pin Styles (Border Radius)</Text>
                    <div className="flex flex-wrap gap-3">
                      <Button pin="circle-circle">Circle-Circle</Button>
                      <Button pin="round-round">Round-Round</Button>
                      <Button pin="clear-clear">Clear-Clear</Button>
                      <Button pin="brick-brick">Brick-Brick</Button>
                      <Button pin="round-brick">Round-Brick</Button>
                      <Button pin="brick-round">Brick-Round</Button>
                      <Button pin="round-clear">Round-Clear</Button>
                      <Button pin="clear-round">Clear-Round</Button>
                      <Button pin="brick-clear">Brick-Clear</Button>
                      <Button pin="clear-brick">Clear-Brick</Button>
                    </div>
                  </div>

                  <div>
                    <Text variant="subheader-2" color="secondary" className="mb-4">Icon Display Options</Text>
                    <div className="flex flex-wrap gap-3">
                      <Button icon="FaCheck" iconDisplay="Icon only" />
                      <Button icon="FaCheck" iconDisplay="Start with Icon">Start Icon</Button>
                      <Button icon="FaArrowRight" iconDisplay="End with Icon">End Icon</Button>
                      <Button icon="FaDownload" iconDisplay="Start with Icon" size="s">Download</Button>
                      <Button icon="FaUpload" iconDisplay="End with Icon" size="l">Upload</Button>
                    </div>
                  </div>

                  <div>
                    <Text variant="subheader-2" color="secondary" className="mb-4">States</Text>
                    <div className="flex flex-wrap gap-3">
                      <Button>Normal</Button>
                      <Button disabled>Disabled</Button>
                      <Button isRecordLevel>Record Level</Button>
                      <Button view="action" disabled>Disabled Action</Button>
                    </div>
                  </div>

                  <div>
                    <Text variant="subheader-2" color="secondary" className="mb-4">Width Options</Text>
                    <div className="space-y-3">
                      <Button width="auto">Auto Width</Button>
                      <Button width="100%">Full Width (100%)</Button>
                      <Button width="200px">Fixed Width (200px)</Button>
                    </div>
                  </div>

                  <div>
                    <Text variant="subheader-2" color="secondary" className="mb-4">Header Positions</Text>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <Button headerText="Top" headerPosition="top">Button</Button>
                      <Button headerText="Bottom" headerPosition="bottom">Button</Button>
                      <Button headerText="Left" headerPosition="left">Button</Button>
                      <Button headerText="Right" headerPosition="right">Button</Button>
                    </div>
                  </div>

                  <div>
                    <Text variant="subheader-2" color="secondary" className="mb-4">With Tooltip</Text>
                    <div className="flex flex-wrap gap-3">
                      <Button needTooltip tooltipProps={{ title: "Top tooltip", placement: "top-start" }}>Top</Button>
                      <Button needTooltip tooltipProps={{ title: "Bottom tooltip", placement: "bottom-start" }}>Bottom</Button>
                      <Button needTooltip tooltipProps={{ title: "Left tooltip", placement: "left-start" }}>Left</Button>
                      <Button needTooltip tooltipProps={{ title: "Right tooltip", placement: "right-start" }}>Right</Button>
                    </div>
                  </div>

                  <div>
                    <Text variant="subheader-2" color="secondary" className="mb-4">Combined Variations</Text>
                    <div className="flex flex-wrap gap-3">
                      <Button view="action" size="l" icon="FaSave" iconDisplay="Start with Icon" pin="round-round">Save Changes</Button>
                      <Button view="outlined-danger" size="m" icon="FaTrash" iconDisplay="Start with Icon">Delete</Button>
                      <Button view="flat-success" size="s" icon="FaCheck" iconDisplay="End with Icon">Approve</Button>
                      <Button view="raised" size="xl" icon="FaRocket" iconDisplay="Icon only" pin="circle-circle" />
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Avatar Component */}
            <section id="avatar" className="scroll-mt-24">
              <Card view="outlined" size="l" className="p-8">
                <Text variant="display-1" color="brand" className="mb-6">Avatar</Text>

                <div className="space-y-8">
                  <div>
                    <Text variant="subheader-2" color="secondary" className="mb-4">Sizes</Text>
                    <div className="flex flex-wrap items-end gap-4">
                      <Avatar size="xs" text="XS" />
                      <Avatar size="s" text="S" />
                      <Avatar size="m" text="M" />
                      <Avatar size="l" text="L" />
                      <Avatar size="xl" text="XL" />
                    </div>
                  </div>

                  <div>
                    <Text variant="subheader-2" color="secondary" className="mb-4">Shapes</Text>
                    <div className="flex flex-wrap gap-4">
                      <Avatar shape="circle" text="C" />
                      <Avatar shape="square" text="S" />
                    </div>
                  </div>

                  <div>
                    <Text variant="subheader-2" color="secondary" className="mb-4">Views & Themes</Text>
                    <div className="flex flex-wrap gap-4">
                      <Avatar view="filled" theme="brand" text="B" />
                      <Avatar view="outlined" theme="brand" text="O" />
                      <Avatar view="filled" text="D" />
                    </div>
                  </div>

                  <div>
                    <Text variant="subheader-2" color="secondary" className="mb-4">With Icons</Text>
                    <div className="flex flex-wrap gap-4">
                      <Avatar icon="FaUser" />
                      <Avatar icon="FaHeart" theme="brand" />
                      <Avatar icon="FaStar" view="outlined" theme="brand" />
                    </div>
                  </div>

                  <div>
                    <Text variant="subheader-2" color="secondary" className="mb-4">With Images</Text>
                    <div className="flex flex-wrap gap-4">
                      <Avatar imageUrl="https://i.pravatar.cc/150?img=1" alt="User 1" />
                      <Avatar imageUrl="https://i.pravatar.cc/150?img=2" alt="User 2" withImageBorder />
                      <Avatar imageUrl="https://i.pravatar.cc/150?img=3" alt="User 3" shape="square" />
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Card Component */}
            <section id="card" className="scroll-mt-24">
              <Card view="outlined" size="l" className="p-8">
                <Text variant="display-1" color="brand" className="mb-6">Card</Text>

                <div className="space-y-8">
                  <div>
                    <Text variant="subheader-2" color="secondary" className="mb-4">Views</Text>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <Card view="filled">Filled</Card>
                      <Card view="outlined">Outlined</Card>
                      <Card view="raised">Raised</Card>
                      <Card view="clear">Clear</Card>
                    </div>
                  </div>

                  <div>
                    <Text variant="subheader-2" color="secondary" className="mb-4">Themes</Text>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      <Card theme="normal">Normal</Card>
                      <Card theme="info">Info</Card>
                      <Card theme="success">Success</Card>
                      <Card theme="warning">Warning</Card>
                      <Card theme="danger">Danger</Card>
                      <Card theme="utility">Utility</Card>
                      <Card theme="brand">Brand</Card>
                    </div>
                  </div>

                  <div>
                    <Text variant="subheader-2" color="secondary" className="mb-4">Sizes</Text>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card size="m">Medium Card</Card>
                      <Card size="l">Large Card</Card>
                    </div>
                  </div>

                  <div>
                    <Text variant="subheader-2" color="secondary" className="mb-4">With Features</Text>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card title="Card Title">With title</Card>
                      <Card icon="FaStar" prefixValue="Featured">With icon and prefix</Card>
                      <Card type="selection" selected>Selectable (Selected)</Card>
                      <Card type="action" onClick={() => alert('Clicked!')}>Clickable Action</Card>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Form Inputs Section */}
            <section id="checkbox" className="scroll-mt-24">
              <Card view="outlined" size="l" className="p-8">
                <Text variant="display-1" color="brand" className="mb-6">Form Inputs</Text>

                <div className="space-y-12">
                  {/* Checkbox */}
                  <div>
                    <Text variant="header-2" color="primary" className="mb-4">Checkbox</Text>
                    <div className="space-y-6">
                      <div>
                        <Text variant="subheader-2" color="secondary" className="mb-3">Sizes & States</Text>
                        <div className="space-y-3">
                          <Checkbox size="m" content="Medium checkbox" checked={checkboxValue} onChange={setCheckboxValue} />
                          <Checkbox size="l" content="Large checkbox" />
                          <Checkbox content="Checked" checked={true} />
                          <Checkbox content="Disabled" disabled />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Switch */}
                  <div id="switch">
                    <Text variant="header-2" color="primary" className="mb-4">Switch</Text>
                    <div className="space-y-3">
                      <Switch size="m" content="Medium switch" checked={switchValue} onChange={setSwitchValue} />
                      <Switch size="l" content="Large switch" checked={false} onChange={() => {}} />
                      <Switch size="m" content="Disabled" disabled checked={false} onChange={() => {}} />
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Text Input */}
            <section id="textinput" className="scroll-mt-24">
              <Card view="outlined" size="l" className="p-8">
                <Text variant="display-1" color="brand" className="mb-6">TextInput</Text>

                <div className="space-y-8 max-w-2xl">
                  <div>
                    <Text variant="subheader-2" color="secondary" className="mb-3">Sizes</Text>
                    <div className="space-y-3">
                      <TextInput size="xs" placeholder="Extra small" />
                      <TextInput size="s" placeholder="Small" />
                      <TextInput size="m" placeholder="Medium" />
                      <TextInput size="l" placeholder="Large" />
                      <TextInput size="xl" placeholder="Extra large" />
                    </div>
                  </div>

                  <div>
                    <Text variant="subheader-2" color="secondary" className="mb-3">Views</Text>
                    <div className="space-y-3">
                      <TextInput view="normal" placeholder="Normal view" />
                      <TextInput view="clear" placeholder="Clear view" />
                    </div>
                  </div>

                  <div>
                    <Text variant="subheader-2" color="secondary" className="mb-3">With Icons & Content</Text>
                    <div className="space-y-3">
                      <TextInput leftContent="@" placeholder="Username" />
                      <TextInput rightContent=".com" placeholder="Domain" />
                      <TextInput startContent={<Icon data="FaSearch" size={16} />} placeholder="Search..." />
                      <TextInput endContent={<Icon data="FaEye" size={16} />} placeholder="Password" type="password" />
                    </div>
                  </div>

                  <div>
                    <Text variant="subheader-2" color="secondary" className="mb-3">States & Features</Text>
                    <div className="space-y-3">
                      <TextInput placeholder="Normal" />
                      <TextInput placeholder="Disabled" disabled />
                      <TextInput placeholder="Read-only" readOnly value="Read-only value" />
                      <TextInput placeholder="With clear button" hasClear />
                      <TextInput validationState="invalid" errorMessage="This field is required" placeholder="Invalid" />
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* TextArea */}
            <section id="textarea" className="scroll-mt-24">
              <Card view="outlined" size="l" className="p-8">
                <Text variant="display-1" color="brand" className="mb-6">TextArea</Text>

                <div className="space-y-8 max-w-2xl">
                  <div>
                    <Text variant="subheader-2" color="secondary" className="mb-3">Basic TextArea</Text>
                    <TextArea size="m" minRows={3} maxRows={6} placeholder="Enter your text here..." value={textAreaValue} onChange={(e) => setTextAreaValue(e.target.value)} />
                  </div>

                  <div>
                    <Text variant="subheader-2" color="secondary" className="mb-3">Sizes</Text>
                    <div className="space-y-3">
                      <TextArea size="s" minRows={2} maxRows={4} placeholder="Small" />
                      <TextArea size="m" minRows={3} maxRows={6} placeholder="Medium" />
                      <TextArea size="l" minRows={4} maxRows={8} placeholder="Large" />
                    </div>
                  </div>

                  <div>
                    <Text variant="subheader-2" color="secondary" className="mb-3">States</Text>
                    <div className="space-y-3">
                      <TextArea size="m" minRows={3} maxRows={6} placeholder="Normal" />
                      <TextArea size="m" minRows={3} maxRows={6} disabled placeholder="Disabled" />
                      <TextArea size="m" minRows={3} maxRows={6} readOnly value="Read-only content" />
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Select & Dropdown */}
            <section id="select" className="scroll-mt-24">
              <Card view="outlined" size="l" className="p-8">
                <Text variant="display-1" color="brand" className="mb-6">Select & Dropdown</Text>

                <div className="space-y-12 max-w-2xl">
                  <div>
                    <Text variant="header-2" color="primary" className="mb-4">Select</Text>
                    <div className="space-y-6">
                      <div>
                        <Text variant="subheader-2" color="secondary" className="mb-3">Basic</Text>
                        <Select options={[{ value: "1", label: "Option 1" }, { value: "2", label: "Option 2" }]} placeholder="Select an option" />
                      </div>

                      <div>
                        <Text variant="subheader-2" color="secondary" className="mb-3">Multiple & Searchable</Text>
                        <div className="space-y-3">
                          <Select multiple options={[{ value: "1", label: "React" }, { value: "2", label: "Vue" }, { value: "3", label: "Angular" }]} placeholder="Multiple select" />
                          <Select searchable options={[{ value: "us", label: "United States" }, { value: "uk", label: "United Kingdom" }]} placeholder="Searchable" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="dropdown">
                    <Text variant="header-2" color="primary" className="mb-4">Dropdown</Text>
                    <div className="space-y-6">
                      <div>
                        <Text variant="subheader-2" color="secondary" className="mb-3">Basic</Text>
                        <Dropdown static staticProps={["Option 1", "Option 2", "Option 3"]} placeholder="Select an option" />
                      </div>

                      <div>
                        <Text variant="subheader-2" color="secondary" className="mb-3">Features</Text>
                        <div className="space-y-3">
                          <Dropdown static multiselect staticProps={["React", "Vue", "Angular"]} placeholder="Multiselect" />
                          <Dropdown static filterable staticProps={["USA", "UK", "Canada", "Australia"]} placeholder="Filterable" />
                          <Dropdown static hasClear staticProps={["Red", "Green", "Blue"]} placeholder="Clearable" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* DatePicker & PinInput */}
            <section id="datepicker" className="scroll-mt-24">
              <Card view="outlined" size="l" className="p-8">
                <Text variant="display-1" color="brand" className="mb-6">Specialized Inputs</Text>

                <div className="space-y-12 max-w-2xl">
                  <div>
                    <Text variant="header-2" color="primary" className="mb-4">DatePicker</Text>
                    <div className="space-y-4">
                      <DatePicker value={dateValue} onChange={setDateValue} />
                      <DatePicker label="Select Date" />
                      <DatePicker disabled />
                    </div>
                  </div>

                  <div id="pininput">
                    <Text variant="header-2" color="primary" className="mb-4">PinInput</Text>
                    <div className="space-y-6">
                      <PinInput length={4} value={pinValue} onChange={setPinValue} />
                      <PinInput length={6} placeholder="•" />
                      <PinInput length={4} mask />
                      <div className="space-y-3">
                        <Text variant="body-2" color="secondary">Sizes:</Text>
                        <PinInput length={4} size="s" />
                        <PinInput length={4} size="m" />
                        <PinInput length={4} size="l" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Slider & Radio */}
            <section id="slider" className="scroll-mt-24">
              <Card view="outlined" size="l" className="p-8">
                <Text variant="display-1" color="brand" className="mb-6">Slider & Radio</Text>

                <div className="space-y-12 max-w-2xl">
                  <div>
                    <Text variant="header-2" color="primary" className="mb-4">Slider</Text>
                    <div className="space-y-6">
                      <div>
                        <Slider value={sliderValue} onChange={setSliderValue} min={0} max={100} />
                        <Text variant="body-2" color="secondary" className="mt-2">Value: {sliderValue}</Text>
                      </div>
                      <Slider headerText="Volume" value={50} onChange={() => {}} min={0} max={100} />
                      <Slider value={30} onChange={() => {}} disabled min={0} max={100} />
                    </div>
                  </div>

                  <div id="radio">
                    <Text variant="header-2" color="primary" className="mb-4">Radio & Radio Groups</Text>
                    <div className="space-y-6">
                      <div>
                        <Text variant="subheader-2" color="secondary" className="mb-3">Individual Radios</Text>
                        <div className="space-y-2">
                          <Radio content="Option 1" checked={radioValue === "1"} onChange={() => setRadioValue("1")} />
                          <Radio content="Option 2" checked={radioValue === "2"} onChange={() => setRadioValue("2")} />
                          <Radio content="Disabled" disabled />
                        </div>
                      </div>

                      <div>
                        <Text variant="subheader-2" color="secondary" className="mb-3">Radio Button Group</Text>
                        <RadioButton size="m" items={[{ value: "1", content: "Option 1" }, { value: "2", content: "Option 2" }, { value: "3", content: "Option 3" }]} />
                      </div>

                      <div>
                        <Text variant="subheader-2" color="secondary" className="mb-3">Radio Group</Text>
                        <RadioGroup size="m" items={[{ value: "a", content: "Choice A" }, { value: "b", content: "Choice B" }]} />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Modal & Popup */}
            <section id="modal" className="scroll-mt-24">
              <Card view="outlined" size="l" className="p-8">
                <Text variant="display-1" color="brand" className="mb-6">Overlays</Text>

                <div className="space-y-12">
                  <div>
                    <Text variant="header-2" color="primary" className="mb-4">Modal</Text>
                    <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
                    <Modal open={modalOpen} onClose={() => setModalOpen(false)} size="m" title="Modal Title" footer={<><Button view="flat" onClick={() => setModalOpen(false)}>Cancel</Button><Button view="action" onClick={() => setModalOpen(false)}>Confirm</Button></>}>
                      <div className="space-y-4">
                        <Text variant="body-2">This is a modal dialog with footer actions.</Text>
                        <Text variant="body-2" color="secondary">You can close it by clicking the buttons, pressing Escape, or clicking outside.</Text>
                      </div>
                    </Modal>
                  </div>

                  <div id="popup">
                    <Text variant="header-2" color="primary" className="mb-4">Popup</Text>
                    <Button ref={anchorRef as any} onClick={openPopup}>Open Popup</Button>
                    <Popup anchorRef={anchorRef as any} open={isOpen} onClose={closePopup} placement="bottom">
                      <div className="space-y-2">
                        <Text variant="subheader-2">Popup Content</Text>
                        <Text variant="body-2" color="secondary">This is a positioned popup relative to the button.</Text>
                      </div>
                    </Popup>
                  </div>
                </div>
              </Card>
            </section>

            {/* Display Components */}
            <section id="icon" className="scroll-mt-24">
              <Card view="outlined" size="l" className="p-8">
                <Text variant="display-1" color="brand" className="mb-6">Display Components</Text>

                <div className="space-y-12">
                  <div>
                    <Text variant="header-2" color="primary" className="mb-4">Icon</Text>
                    <div className="space-y-6">
                      <div>
                        <Text variant="subheader-2" color="secondary" className="mb-3">Different Icons</Text>
                        <div className="flex flex-wrap gap-4">
                          <Icon data="FaHome" />
                          <Icon data="FaUser" />
                          <Icon data="FaHeart" />
                          <Icon data="FaStar" />
                          <Icon data="FaCog" />
                          <Icon data="FaCheck" />
                        </div>
                      </div>

                      <div>
                        <Text variant="subheader-2" color="secondary" className="mb-3">Sizes</Text>
                        <div className="flex flex-wrap items-end gap-4">
                          <Icon data="FaHeart" size={16} />
                          <Icon data="FaHeart" size={24} />
                          <Icon data="FaHeart" size={32} />
                          <Icon data="FaHeart" size={48} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="image">
                    <Text variant="header-2" color="primary" className="mb-4">Image</Text>
                    <div className="space-y-4">
                      <Image url="https://via.placeholder.com/300x200" alt="Placeholder" width="300px" height="200px" />
                      <Image url="https://via.placeholder.com/150x150" alt="Small" width="150px" height="150px" headerText="Profile Image" />
                    </div>
                  </div>

                  <div id="label">
                    <Text variant="header-2" color="primary" className="mb-4">Label</Text>
                    <div className="space-y-6">
                      <div>
                        <Text variant="subheader-2" color="secondary" className="mb-3">Themes</Text>
                        <div className="flex flex-wrap gap-3">
                          <Label size="m" theme="normal">Normal</Label>
                          <Label size="m" theme="info">Info</Label>
                          <Label size="m" theme="success">Success</Label>
                          <Label size="m" theme="warning">Warning</Label>
                          <Label size="m" theme="danger">Danger</Label>
                          <Label size="m" theme="utility">Utility</Label>
                        </div>
                      </div>

                      <div>
                        <Text variant="subheader-2" color="secondary" className="mb-3">With Icons</Text>
                        <div className="flex flex-wrap gap-3">
                          <Label size="m" theme="info" icon="FaInfo">Info</Label>
                          <Label size="m" theme="success" icon="FaCheck">Success</Label>
                          <Label size="m" theme="warning" icon="FaExclamation">Warning</Label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Typography */}
            <section id="text" className="scroll-mt-24">
              <Card view="outlined" size="l" className="p-8">
                <Text variant="display-1" color="brand" className="mb-6">Typography</Text>

                <div className="space-y-8">
                  <div>
                    <Text variant="subheader-2" color="secondary" className="mb-4">Display Variants</Text>
                    <div className="space-y-2">
                      <Text variant="display-4">Display 4 - Largest</Text>
                      <Text variant="display-3">Display 3</Text>
                      <Text variant="display-2">Display 2</Text>
                      <Text variant="display-1">Display 1</Text>
                    </div>
                  </div>

                  <div>
                    <Text variant="subheader-2" color="secondary" className="mb-4">Headers & Subheaders</Text>
                    <div className="space-y-2">
                      <Text variant="header-2">Header 2</Text>
                      <Text variant="header-1">Header 1</Text>
                      <Text variant="subheader-3">Subheader 3</Text>
                      <Text variant="subheader-2">Subheader 2</Text>
                      <Text variant="subheader-1">Subheader 1</Text>
                    </div>
                  </div>

                  <div>
                    <Text variant="subheader-2" color="secondary" className="mb-4">Body Text</Text>
                    <div className="space-y-2">
                      <Text variant="body-3">Body 3 - Larger body text</Text>
                      <Text variant="body-2">Body 2 - Normal body text</Text>
                      <Text variant="body-1">Body 1 - Smaller body text</Text>
                    </div>
                  </div>

                  <div>
                    <Text variant="subheader-2" color="secondary" className="mb-4">Colors</Text>
                    <div className="space-y-2">
                      <Text color="primary">Primary Color</Text>
                      <Text color="secondary">Secondary Color</Text>
                      <Text color="brand">Brand Color</Text>
                      <Text color="info">Info Color</Text>
                      <Text color="positive">Positive Color</Text>
                      <Text color="warning">Warning Color</Text>
                      <Text color="danger">Danger Color</Text>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Feedback Components */}
            <section id="progress" className="scroll-mt-24">
              <Card view="outlined" size="l" className="p-8">
                <Text variant="display-1" color="brand" className="mb-6">Feedback</Text>

                <div className="space-y-12 max-w-2xl">
                  <div>
                    <Text variant="header-2" color="primary" className="mb-4">Progress</Text>
                    <div className="space-y-6">
                      <div>
                        <Text variant="subheader-2" color="secondary" className="mb-3">Different Values</Text>
                        <div className="space-y-3">
                          <Progress theme="default" size="m" value={25} />
                          <Progress theme="default" size="m" value={50} />
                          <Progress theme="default" size="m" value={75} />
                          <Progress theme="default" size="m" value={100} />
                        </div>
                      </div>

                      <div>
                        <Text variant="subheader-2" color="secondary" className="mb-3">Themes</Text>
                        <div className="space-y-3">
                          <Progress theme="default" size="m" value={60} text="Default" isDynamic />
                          <Progress theme="info" size="m" value={60} text="Info" isDynamic />
                          <Progress theme="success" size="m" value={60} text="Success" isDynamic />
                          <Progress theme="warning" size="m" value={60} text="Warning" isDynamic />
                          <Progress theme="danger" size="m" value={60} text="Danger" isDynamic />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="spin">
                    <Text variant="header-2" color="primary" className="mb-4">Spin</Text>
                    <div className="space-y-6">
                      <div>
                        <Text variant="subheader-2" color="secondary" className="mb-3">Styles</Text>
                        <div className="flex flex-wrap gap-6">
                          <Spin style="circular" />
                          <Spin style="dots" />
                          <Spin style="bars" />
                          <Spin style="pulse" />
                          <Spin style="ring" />
                        </div>
                      </div>

                      <div>
                        <Text variant="subheader-2" color="secondary" className="mb-3">Sizes & Colors</Text>
                        <div className="flex flex-wrap items-end gap-6">
                          <Spin size="xs" />
                          <Spin size="s" />
                          <Spin size="m" color="success" />
                          <Spin size="l" color="warning" />
                          <Spin size="xl" color="error" />
                        </div>
                      </div>

                      <div>
                        <Text variant="subheader-2" color="secondary" className="mb-3">With Text</Text>
                        <Spin showText text="Loading..." />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Data Components */}
            <section id="table" className="scroll-mt-24">
              <Card view="outlined" size="l" className="p-8">
                <Text variant="display-1" color="brand" className="mb-6">Data Display</Text>

                <div className="space-y-12">
                  <div>
                    <Text variant="header-2" color="primary" className="mb-4">Table</Text>
                    <div className="space-y-8">
                      <div>
                        <Text variant="subheader-2" color="secondary" className="mb-3">Basic Table</Text>
                        <Table columns={[{ id: "id", name: "ID" }, { id: "name", name: "Name" }, { id: "email", name: "Email" }]} data={[{ id: "1", name: "John Doe", email: "john@example.com" }, { id: "2", name: "Jane Smith", email: "jane@example.com" }]} />
                      </div>

                      <div>
                        <Text variant="subheader-2" color="secondary" className="mb-3">With Search</Text>
                        <Table search columns={[{ id: "product", name: "Product" }, { id: "price", name: "Price" }]} data={[{ product: "Laptop", price: "$999" }, { product: "Mouse", price: "$29" }]} />
                      </div>

                      <div>
                        <Text variant="subheader-2" color="secondary" className="mb-3">With Selection</Text>
                        <Table tableSelection selectionMode="multi" selectedIds={tableSelection} onSelectionChange={setTableSelection} columns={[{ id: "task", name: "Task" }, { id: "status", name: "Status" }]} data={[{ task: "Design", status: "In Progress" }, { task: "Documentation", status: "Completed" }]} getRowId={(row, index) => index.toString()} />
                      </div>
                    </div>
                  </div>

                  <div id="list">
                    <Text variant="header-2" color="primary" className="mb-4">List</Text>
                    <div className="space-y-6 max-w-md">
                      <div>
                        <Text variant="subheader-2" color="secondary" className="mb-3">Basic List</Text>
                        <List sortable={false} items={["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]} />
                      </div>

                      <div>
                        <Text variant="subheader-2" color="secondary" className="mb-3">Filterable List</Text>
                        <List sortable={false} filterable items={["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"]} />
                      </div>

                      <div>
                        <Text variant="subheader-2" color="secondary" className="mb-3">With Height Limit</Text>
                        <List sortable={false} items={Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`)} itemsHeight={200} />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Navigation Components */}
            <section id="tabs" className="scroll-mt-24">
              <Card view="outlined" size="l" className="p-8">
                <Text variant="display-1" color="brand" className="mb-6">Navigation</Text>

                <div className="space-y-12">
                  <div>
                    <Text variant="header-2" color="primary" className="mb-4">Tabs</Text>
                    <div className="space-y-8">
                      <div>
                        <Text variant="subheader-2" color="secondary" className="mb-3">Horizontal Tabs</Text>
                        <Tabs items={[{ id: "tab1", title: "Tab 1", content: <div className="p-4">Content 1</div> }, { id: "tab2", title: "Tab 2", content: <div className="p-4">Content 2</div> }, { id: "tab3", title: "Tab 3", content: <div className="p-4">Content 3</div> }]} direction="horizontal" />
                      </div>

                      <div>
                        <Text variant="subheader-2" color="secondary" className="mb-3">With Icons</Text>
                        <Tabs items={[{ id: "home", title: "Home", icon: "arrow-left", content: <div className="p-4">Home</div> }, { id: "user", title: "Profile", icon: "check", content: <div className="p-4">Profile</div> }, { id: "settings", title: "Settings", icon: "calendar", content: <div className="p-4">Settings</div> }]} direction="horizontal" />
                      </div>
                    </div>
                  </div>

                  <div id="menu">
                    <Text variant="header-2" color="primary" className="mb-4">Menu</Text>
                    <div className="space-y-6">
                      <div>
                        <Text variant="subheader-2" color="secondary" className="mb-3">Vertical Menu</Text>
                        <Menu orientation="vertical" size="m">
                          <Menu.Item iconStart="FaHome" active>Home</Menu.Item>
                          <Menu.Item iconStart="FaUser">Profile</Menu.Item>
                          <Menu.Item iconStart="FaCog">Settings</Menu.Item>
                          <Menu.Item iconStart="FaSignOutAlt">Logout</Menu.Item>
                        </Menu>
                      </div>

                      <div>
                        <Text variant="subheader-2" color="secondary" className="mb-3">Horizontal Menu</Text>
                        <Menu orientation="horizontal" size="m">
                          <Menu.Item active>Home</Menu.Item>
                          <Menu.Item>About</Menu.Item>
                          <Menu.Item>Services</Menu.Item>
                          <Menu.Item>Contact</Menu.Item>
                        </Menu>
                      </div>
                    </div>
                  </div>

                  <div id="pagination">
                    <Text variant="header-2" color="primary" className="mb-4">Pagination</Text>
                    <div className="space-y-6">
                      <div>
                        <Text variant="subheader-2" color="secondary" className="mb-3">Basic Pagination</Text>
                        <Pagination page={currentPage} pageSize={pageSize} total={100} onUpdate={({ page, pageSize }) => { setCurrentPage(page); setPageSize(pageSize); }} />
                      </div>

                      <div>
                        <Text variant="subheader-2" color="secondary" className="mb-3">Different Sizes</Text>
                        <div className="space-y-3">
                          <Pagination page={1} pageSize={10} total={50} size="s" onUpdate={() => {}} />
                          <Pagination page={1} pageSize={10} total={50} size="m" onUpdate={() => {}} />
                          <Pagination page={1} pageSize={10} total={50} size="l" onUpdate={() => {}} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </section>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <Text variant="body-2" color="secondary" className="text-center">
            Component Showcase - {sections.length} Components
          </Text>
        </div>
      </footer>
    </div>
  );
}
