// user-form/src/index.js

import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import edit from "./edit";
import save from "./save";

registerBlockType("guten-multi/user-form", {
  title: __("User registration form", "guten-multi"),
  category: "widgets",
  icon: "forms",
  edit,
  save,
});
