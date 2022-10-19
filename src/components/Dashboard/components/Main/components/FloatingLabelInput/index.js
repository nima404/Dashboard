import { useState } from "react";
import { TextInput, createStyles } from "@mantine/core";
import "./style.css";
const useStyles = createStyles((theme, { floating }) => ({
  root: {
    position: "relative",
  },

  label: {
    position: "absolute",
    zIndex: 2,
    top: 7,
    left: theme.spacing.sm,
    pointerEvents: "none",
    color: floating
      ? theme.colorScheme === "dark"
        ? theme.white
        : theme.black
      : theme.colorScheme === "dark"
      ? theme.colors.dark[3]
      : theme.colors.gray[5],
    transition: "transform 150ms ease, color 150ms ease, font-size 150ms ease",
    transform: floating ? `translate(-${theme.spacing.sm}px, -28px)` : "none",
    fontSize: floating ? theme.fontSizes.xs : theme.fontSizes.sm,
    fontWeight: floating ? 500 : 400,
  },

  required: {
    transition: "opacity 150ms ease",
    opacity: floating ? 1 : 0,
  },

  input: {
    "&::placeholder": {
      transition: "color 150ms ease",
      color: !floating ? "transparent" : undefined,
    },
  },
}));

export function FloatingLabelInput({
  label = "",
  placeholder = "",
  changeHandler,
  type,
  value,
  required,
}) {
  const data = value;
  const [focused, setFocused] = useState(false);
  const { classes } = useStyles({
    floating: data.trim().length !== 0 || focused,
  });
  const initialError = required ? `وارد کردن ${label} الزامی است` : "";
  const [error, setError] = useState("");
  const placeholderText = focused ? placeholder : "";
  function handleOnChange(value) {
    changeHandler(value);
    if (value.trim() !== "") {
      setError("");
    } else {
      setError(initialError);
    }
  }
  function handleOnKeyPress(event) {
    if (type === "number" && !/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  }
  function handleOnBlur() {
    setFocused(false);
    if (value === "") {
      setError(initialError);
    }
  }
  return (
    <TextInput
      label={label}
      placeholder={placeholderText}
      required={required}
      type={type}
      error={error !== "" && error}
      classNames={classes}
      value={value}
      onChange={(event) => handleOnChange(event.target.value)}
      onKeyPress={(event) => handleOnKeyPress(event)}
      onFocus={() => setFocused(true)}
      onBlur={handleOnBlur}
      mt="md"
      autoComplete="nope"
    />
  );
}
