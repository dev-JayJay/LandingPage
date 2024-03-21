import { useState, useEffect } from "react";
import axios from "axios";
import { SectionText } from "@/components/Atom/SubHeaders";
import style from "./style.module.css";

interface AnalyticsData {
    total_user: number;
    total_content: number;
    total_views: number;
    downloads: number;
  }

const OverviewSection = () => {
    const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
        total_user: 0,
        total_content: 0,
        total_views: 0,
        downloads: 0,
      });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://dev.api.schovela.com.ng/api/analytic"
        );
        setAnalyticsData(response.data.body);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="body">
      <SectionText
        title="Site Overview -"
        description="Total Users, Contents, Views and DownLoads"
      />
      <div className={style.site_number_wrap}>
        <div className={style.site_number_container}>
          <div>{analyticsData.total_user}</div>
          <span>Users</span>
        </div>
        <div className={style.site_number_container}>
          <div>{analyticsData.total_content}</div>
          <span>Content</span>
        </div>
        <div className={style.site_number_container}>
          <div>{analyticsData.total_views}</div>
          <span>Total views</span>
        </div>
        <div className={style.site_number_container}>
          <div>{analyticsData.downloads}</div>
          <span>Downloads</span>
        </div>
      </div>
    </div>
  );
};

export default OverviewSection;
