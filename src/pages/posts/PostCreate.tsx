import React from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";

const PostCreate = () => {
  return (
    <div className="w-full">
      <h1 className="text-4xl font-bold mb-2">Judul Postingan</h1>
      <InputGroup>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon></InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <InputGroupButton>Search</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export default PostCreate;
