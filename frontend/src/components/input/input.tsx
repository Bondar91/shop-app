import React, { memo } from 'react';
import { useField, FieldAttributes } from 'formik';
import { TextField, TextFieldProps, BaseTextFieldProps } from '@mui/material';

type InputProps = FieldAttributes<{}> & BaseTextFieldProps & TextFieldProps;

export const Input = memo(({ placeholder, ...props }: InputProps) => {
  const [field, meta] = useField<{}>(props);

  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <TextField
      {...props}
      variant="outlined"
      label={props.label}
      placeholder={placeholder}
      {...field}
      helperText={errorText}
      error={!!errorText}
    />
  );
});
