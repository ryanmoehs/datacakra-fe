import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { fetchPostData } from "@/lib/service";
import type { Post } from "@/types/api"
import { titleChange } from "@/utils/titleChange";
import { useEffect, useState } from "react";

const Home = () => {
  titleChange("Home - TravelApp");
  const [postData, setPostData] = useState<Post[]>([])
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(()=>{
    const fetchPosts = async () => {
      try {
        const data = await fetchPostData();
        setPostData(data.data);
        setLoading(false);
        console.log("Fetched post data:", data);
      } catch (err) {
        console.error("Error fetching post data:", err);
        const errorMessage = err instanceof Error ? err.message : "Gagal memuat data artikel.";
        setError(errorMessage);
        setLoading(false);
      }
    }

    fetchPosts();
  }, [])

  return (
    <div className="w-full">
      <section className="relative w-full h-screen bg-[#016B61] flex items-center justify-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-12">
          <div className="flex flex-col items-start justify-center text-white md:w-1/2 space-y-4">
            <h1 className="text-5xl font-bold leading-tight">TravelApp</h1>
            <p className="text-xl font-medium">Perjalanan di Tangan Anda</p>
            <p className="text-sm text-white/80 max-w-md">
              Temukan pengalaman perjalanan terbaik bersama kami.  
              Jelajahi destinasi favorit Anda dengan mudah dan cepat.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:w-1/2">
            {postData.slice(0, 3).map((item) => (
              <Card
                key={item.id}
                className="bg-lime-100 backdrop-blur-md shadow-md hover:shadow-lg transition-shadow"
              >
                <CardHeader className="flex gap-x-4">
                  <img
                    src={item.cover_image_url}
                    alt={item.title}
                    className="rounded-lg w-20 h-20 object-cover"
                  />

                  <div className="flex flex-col justify-center">
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>
                      {item.category?.name} |{" "}
                      {new Date(item.publishedAt).toLocaleDateString("id-ID")}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-sm text-gray-700">
                    {item.description.substring(0, 90)}...
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </section>
    </div>
  )
}

export default Home
