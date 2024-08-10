import * as React from "react";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { Dialog } from "@mui/material";

export default function CModal({ data, isOpen, handleClose }) {
  return (
    <React.Fragment>
      <Dialog open={isOpen} onClose={handleClose}>
        <Sheet className="m-2 ">
          <ModalClose />
          <Typography className="m-2 w-96 text-lg text-gray-800 bg-gray-100 p-2 rounded shadow">
            Trung bình khác: <b>{data?.trung_binh_khach}</b>
          </Typography>
          <Typography className="m-2 w-96 text-lg text-gray-800 bg-gray-100 p-2 rounded shadow">
            Số phút chăm khách: <b>{data?.so_phut_nen_cham_khach}</b>
          </Typography>
          <Typography className="m-2 w-96 text-lg text-gray-800 bg-gray-100 p-2 rounded shadow">
            Số phòng nhân viên trực được tối đa:{" "}
            <b>{data?.so_phong_nhan_vien_truc_duoc_toi_da}</b>
          </Typography>
          <Typography className="m-2 w-96 text-lg text-gray-800 bg-gray-100 p-2 rounded shadow">
            Số giây con dư: <b>{data?.so_giay_con_du}</b>
          </Typography>
          <Typography className="m-2 w-96 text-lg text-gray-800 bg-gray-100 p-2 rounded shadow">
            Số bill của nhân viên trong tháng:{" "}
            <b>{data?.so_bill_cua_nhan_vien_trong_thang}</b>
          </Typography>
          <Typography className="m-2 w-96 text-lg text-gray-800 bg-gray-100 p-2 rounded shadow">
            Phần trăm doanh thu: <b>{data?.phan_tram_doanh_thu}</b>
          </Typography>
          <Typography className="m-2 w-96 text-lg text-gray-800 bg-gray-100 p-2 rounded shadow">
            Doanh thu dự kiến: <b>{data?.doanh_thu_du_kien}</b>
          </Typography>
          <Typography className="m-2 w-96 text-lg text-gray-800 bg-gray-100 p-2 rounded shadow">
            Số bill cần thiết: <b>{data?.so_bill_can_thiet}</b>
          </Typography>
          <Typography className="m-2 w-96 text-lg text-gray-800 bg-gray-100 p-2 rounded shadow">
            Số nhân viên: <b>{data?.so_nhan_vien}</b>
          </Typography>
          <Typography className="m-2 w-96 text-lg text-gray-800 bg-gray-100 p-2 rounded shadow">
            Số phòng:
          </Typography>

          {data?.so_phong.map((item, index) => (
            <Typography
              key={index}
              className="m-2 w-96 text-lg text-gray-800 bg-gray-100 p-2 rounded shadow"
            >
              Phòng {item.room}: <b>{item.time} phút</b>
            </Typography>
          ))}
        </Sheet>
      </Dialog>
    </React.Fragment>
  );
}
