import { useState, useEffect } from "react";
import axios from "axios";
import { SectionText } from "@/components/Atom/SubHeaders";
import style from "./style.module.css";
import { useInView } from "react-intersection-observer";

interface AnalyticsData {
    total_user: number;
    total_content: number;
    total_views: number;
    downloads: number;
  }
  interface OverviewSectionProps {
    onDataReceived: (data: any) => void; // Adjust the type of data as needed
  }
  

const OverviewSection = ({onDataReceived}: OverviewSectionProps) => {
    const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
        total_user: 0,
        total_content: 0,
        total_views: 0,
        downloads: 0,
      });

      const [animationStarted, setAnimationStarted] = useState({
        total_user: false,
        total_content: false,
        total_views: false,
        downloads: false,
      });

      const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2, // Adjust this threshold as needed
      });

      const startCountingAnimation = (fieldName: keyof AnalyticsData) => {
        if (!animationStarted[fieldName]) {
          let start = 0;
          const end = analyticsData[fieldName];
          const duration = 2000;
          const range = end - start;
          let current = start;
          const increment = end > start ? 1 : -1;
          const stepTime = Math.abs(Math.floor(duration / range)); // Ensure stepTime is positive
          const timer = setInterval(() => {
            current += increment;
            setAnalyticsData((prevData) => ({
              ...prevData,
              [fieldName]: current,
            }));
            if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
              clearInterval(timer);
            }
          }, stepTime);
          setAnimationStarted((prev) => ({
            ...prev,
            [fieldName]: true,
          }));
        }
      };
      
    
    

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

  useEffect(() => {
    if (inView) {
        startCountingAnimation("total_user");
        startCountingAnimation("total_content");
        startCountingAnimation("total_views");
        startCountingAnimation("downloads");
    }
  }, [inView]);

  useEffect(() => {
    // Send data to Home component when analyticsData updates
    const data = {
      Users: analyticsData.total_user,
      Downloads: analyticsData.downloads,
    };
    onDataReceived(data);
  }, [analyticsData, onDataReceived]);

  return (
    <div className="body">
      <SectionText
        title="Site Overview -"
        description="Total Users, Contents, Views and DownLoads"
      />
      <div className={style.site_number_wrap} ref={ref}>
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
