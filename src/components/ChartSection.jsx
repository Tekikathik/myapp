import React from "react";
import { Download } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./ChartSection.css";

const ChartSection = ({ data }) => {
  return (
    <div className="chart-section">
      <ResponsiveContainer width={700} height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#94a3b8" radius={[6, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>

      <div className="download-container">
        <button className="download-btn">
          <Download className="icon" /> Download
        </button>
      </div>
    </div>
  );
};

export default ChartSection;
