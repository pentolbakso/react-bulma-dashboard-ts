import React from "react";
import { Form } from "react-bulma-components";
import { Controller } from "react-hook-form";

const SelectController = ({
  name,
  control,
  defaultValue,
  options,
}: {
  name: string;
  control: any;
  defaultValue: any;
  options: Array<any>;
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={(props: any) => (
        <Form.Select
          name={props.name}
          onChange={props.onChange}
          onBlur={props.onBlur}
          value={props.value}
          className="is-fullwidth"
        >
          {options.map((opt, n) => (
            <option value={opt.value} key={n}>
              {opt.label || opt.value}
            </option>
          ))}
        </Form.Select>
      )}
    />
  );
};
export default SelectController;
