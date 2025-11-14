// import { postsServices } from "@/lib/service";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { NavLink } from "react-router";
import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@radix-ui/react-separator";

const PostIndex = () => {
  const [post, setPost] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   postsServices
  //     .getAll()
  //     .then((res) => {
  //       console.log("API Response :", res);
  //       const data = Array.isArray(res.data) ? res.data : res.data?.data || [];
  //       setPost(data);
  //     })
  //     .catch((err) => console.error(err))
  //     .finally(() => setLoading(false));
  // }, []);
  if (loading) return <div>Loading...</div>;

  return (
    <div className="w-full">
      {/* <h2>Posts</h2>
      <ul className='border border-black'>
        {post.map(p => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul> */}
      <section className="relative w-full h-screen overflow-hidden">
        <Carousel className="w-full h-full">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="w-full h-screen">
                <NavLink to="/posts">
                  <Card className="w-full h-full border-none rounded-none">
                    <CardContent className="relative w-full h-full p-0">
                      <img
                        src={`https://picsum.photos/1920/1080?random=${
                          index + 1
                        }`}
                        alt={`Slide ${index + 1}`}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-end px-10 py-20">
                        <div className="flex flex-col gap-y-2">
                          <span className="w-fit text-white rounded-full bg-green-600 px-4 py-2">
                            Kategori
                          </span>
                          <h2 className="text-white text-5xl font-bold">
                            Wisata {index + 1}
                          </h2>
                          <p className="text-white">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit.
                          </p>
                          <p className="text-slate-200">
                            2 Januari 2025 | 5 min read
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </NavLink>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="z-20" />
          <CarouselNext className="z-20" />
        </Carousel>
      </section>
      <Separator className="my-2" />
      <div className="flex flex-col w-full max-w-7xl mx-auto px-6 md:px-12 py-6">
        <h2 className="text-lg font-bold">Shotout</h2>
        <div className="flex flex-col gap-4 mt-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <NavLink to="/posts/1">
            <Card
              key={i}
              className=" bg-white/90 backdrop-blur-md shadow-md hover:shadow-lg transition-shadow"
            >
              <CardHeader className="flex gap-x-4">
                <img
                  src={`https://picsum.photos/300/200?random=${i + 1}`}
                  alt={`Artikel ${i + 1}`}
                  className="rounded-lg mb-2 w-20
                      object-cover"
                />
                <div className="flex flex-col gap-y-2 justify-center">
                  <CardTitle>Artikel {i + 1}</CardTitle>
                  <CardDescription>Kategori | 2 Januari 2023</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </CardContent>
            </Card>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostIndex;
