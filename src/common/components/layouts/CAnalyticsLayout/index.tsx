import CFocusOutlineInput from "../../controls/CInputOutline";
import CButton from "../../controls/CButton";
import CInputReactNumberFormat from "../../controls/CIpuntNumberFormat";
import React, { useState } from "react";
import CSelectIndicator from "../../controls/CSelect";
import { useForm } from "react-hook-form";
import { analytics } from "../../../../api/analytics";
import CModal from "../../controls/CModal";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Button } from "@mui/material";

const AnalyticsLayout: React.FC = ({ children }: any) => {
  const stores = [
    { key: "1", value: "ICOOL Ung Văn Khiêm" },
    { key: "4", value: "ICOOL Xô Viết Nghệ Tĩnh" },
    { key: "5", value: "ICOOL Tô Ký" },
    { key: "6", value: "ICOOL Bình Phú" },
    { key: "7", value: "ICOOL Dương Bá Trạc" },
    { key: "9", value: "ICOOL Nguyễn Sơn" },
    { key: "10", value: "ICOOL Thành Thái" },
    { key: "12", value: "ICOOL Mạc Đỉnh Chi" },
    { key: "13", value: "ICOOL Trần Bình Trọng" },
    { key: "16", value: "ICOOL Cầu Chữ Y" },
    { key: "17", value: "ICOOL Nhị Thiên Đường" },
    { key: "11", value: "ICOOL Nguyễn Trãi" },
    { key: "14", value: "ICOOL Cách Mạng Tháng 8" },
    { key: "18", value: "ICOOL Trần Não" },
    { key: "19", value: "ICOOL Nguyễn Tri Phương" },
    { key: "22", value: "ICOOL Đồng Đen" },
    { key: "23", value: "ICOOL Phan Chu Trinh" },
    { key: "25", value: "ICOOL Vũng Tàu" },
    { key: "24", value: "ICOOL Phan Xích Long" },
    { key: "29", value: "ICOOL Lê Văn Việt" },
    { key: "31", value: "ICOOL Hoàng Diệu 2" },
  ];

  const shifts = [
    {
      key: 1,
      value: "Ca sáng",
    },
    {
      key: 2,
      value: "Ca tối",
    },
  ];

  const typeDays = [
    { key: 1, value: "Ngày thường" },
    { key: 2, value: "Cuối tuần" },
  ];

  const { control, watch } = useForm({
    defaultValues: {
      store: "",
      shift: 0,
      type_day: 0,
      revenue: 0,
      seconds: 0,
      time: 0,
      avg_bill: 0,
    },
  });

  const store = watch("store");
  const shift = watch("shift");
  const type_day = watch("type_day");
  const revenue = watch("revenue");
  const seconds = watch("seconds");
  const time = watch("time");
  const avg_bill = watch("avg_bill");

  // const { data, isLoading } = useQuery({
  //   queryKey: ["analytics"],
  //   queryFn: async () =>
  //     await analytics(store, shift, type_day, seconds, time, revenue, avg_bill),
  //   enabled: false,
  // });

  // console.log("data: ", data);

  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<any>(null);
  const handleSubmit = async () => {
    setIsLoading(true);
    const data = await analytics(
      store,
      shift,
      type_day,
      seconds,
      time,
      revenue,
      avg_bill
    );
    setIsLoading(false);
    setData(data);
    setIsOpen(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    window.location.href = "/";
  };

  return (
    <div className="relative h-screen w-screen flex justify-center bg-gray-100">
      <div className="fixed top-4 right-4">
        <Button style={{ color: "red" }} onClick={handleLogout}>
          <ExitToAppIcon />
        </Button>
      </div>
      <div className="mt-10">
        <h1 className="text-2xl font-bold">Analytics</h1>
        <div className="items-center">
          <CSelectIndicator
            control={control}
            name="store"
            options={stores}
            placeholder="Chọn chi nhánh"
          />
          <CSelectIndicator
            control={control}
            name="shift"
            options={shifts}
            placeholder="Chọn ca làm việc"
          />
          <CSelectIndicator
            control={control}
            name="type_day"
            options={typeDays}
            placeholder="Chọn loại ngày"
          />
          <CFocusOutlineInput
            control={control}
            id="seconds"
            name="seconds"
            placeholder="Thời gian chăm trên 1 khách"
          />
          <CFocusOutlineInput
            control={control}
            id="time"
            name="time"
            placeholder="Thời gian di chuyển"
          />
          <CInputReactNumberFormat
            control={control}
            name="revenue"
            label="Doanh thu kì vọng"
          />
          <CInputReactNumberFormat
            control={control}
            name="avg_bill"
            label="Trung bình bill tối đa"
          />

          <CButton
            type=""
            isLoading={isLoading}
            onClick={handleSubmit}
            color="success"
            text="Xem kết quả"
          />
        </div>
      </div>
      <CModal
        data={data}
        isOpen={isOpen}
        handleClose={() => {
          setIsOpen(false);
          console.log("close");
        }}
      />
      <div>{children}</div>
    </div>
  );
};

export default AnalyticsLayout;
