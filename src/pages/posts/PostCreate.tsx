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
      <div className="flex mt-20">
        <div className="flex flex-col w-full max-w-7xl mx-auto px-6 md:px-12 py-6 items-center">
          <h1 className="text-4xl font-bold mb-6">Buat Postingan Baru</h1>
          <div className="flex flex-col gap-4 mb-6 w-xl">
            <InputGroup>
              <InputGroupInput placeholder="Judul" />
              <InputGroupAddon></InputGroupAddon>
              <InputGroupAddon align="inline-end"></InputGroupAddon>
            </InputGroup>
            <InputGroup>
              <InputGroupTextarea placeholder="What's in your mind" />
              <InputGroupAddon></InputGroupAddon>
              <InputGroupAddon align="inline-end"></InputGroupAddon>
            </InputGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCreate;
