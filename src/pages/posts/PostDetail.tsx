import { Card } from "@/components/ui/card";
import { titleChange } from "@/utils/titleChange";
import { Heart } from "lucide-react";
import React from "react";

const PostDetail = () => {
  titleChange(` - TravelApp`);
  return (
    <div className="w-full">
      <div className="relative w-full h-90 p-0">
        <img
          src="https://picsum.photos/1920/1080?random=10"
          alt=""
          className="relative w-full h-full p-0"
        />
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
        <div className="flex items-center gap-4">
          <div>
            <h1 className="text-4xl font-bold mb-2">Judul Postingan</h1>
            <span className="text-sm text-gray-500">
              Kategori | 2 Januari 2023
            </span>
          </div>
          <Card className="px-4 py-2 bg-green-600 text-white rounded-full">
            <Heart />
          </Card>
        </div>
        <div className="mt-4 prose prose-lg max-w-none">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            ipsum aspernatur voluptatum omnis, alias temporibus, et delectus sed
            excepturi minus officiis impedit fuga iste ipsa accusantium modi,
            dolore provident ducimus.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
        <div className="flex items-center gap-4">
          <div>
            <h1 className="text-4xl font-bold mb-2">Komentar</h1>
            <span className="text-sm text-gray-500">
              2 Januari 2023
            </span>
          </div>
        </div>
        <div className="mt-4 prose prose-lg max-w-none">
          <p>
            Bagus banget woilah cik
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
