import React, { Component } from "react";
import "./ScheduleStyle.css";

export default class ScheduleMovie extends Component {
  render() {
    return (
      <div>
        <div className="bg_schedule ">
          {/* Movie Schedule Dropdown */}

          <div className="bg_schedule_layout2 ">
            <div className="container text-center bg_schedule_btn ">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-outline-primary dropdown-toggle pr_50"
                  data-toggle="dropdown"
                >
                  Phim
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    Phim Hoạt hình
                  </a>
                  <a className="dropdown-item" href="#">
                    Phim hành động
                  </a>
                </div>
              </div>
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-outline-primary dropdown-toggle pr_50"
                  data-toggle="dropdown"
                >
                  Rạp
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    Sài Gòn
                  </a>
                  <a className="dropdown-item" href="#">
                    Hà Nội
                  </a>
                </div>
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-outline-primary dropdown-toggle px-2"
                    data-toggle="dropdown"
                  >
                    Ngày xem
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      Hôm nay
                    </a>
                    <a className="dropdown-item" href="#">
                      Ngày mai
                    </a>
                  </div>
                </div>
              </div>
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-outline-primary dropdown-toggle px-2"
                  data-toggle="dropdown"
                >
                  Xuất chiếu
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    12:00
                  </a>
                  <a className="dropdown-item" href="#">
                    24:00
                  </a>
                </div>
              </div>
              <button type="button" className="btn btn-danger ml-5 px-2">
                Mua vé ngay
              </button>
            </div>

            {/* Movie Schedule Dropdown */}
            {/* Movie Schedule title */}
            <div className="container mt-5 mb-3">
              <nav className="navbar navbar-expand navbar-light bg_beauty jus_center"></nav>
            </div>
            {/* Movie Schedule title */}
            {/* Movie Schedule content */}
            <div className="container">
              <div className="row jus_center">
                <div className="shadow-sm  bg_blur width_20 mx-5 my-1">
                  <img
                    className="card_img"
                    src="https://s3img.vcdn.vn/mobile/123phim/2019/08/fast-furious-hobbs-shaw-c16-15668164609551_215x318.jpg"
                    alt="movie name"
                  />
                  <div className="card_content ">
                    <h4 className="text-white pl-2">Fast and Furious</h4>
                    <p className="text-white pl-2">Hot movie this month</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Movie Schedule content */}
          </div>
        </div>
      </div>
    );
  }
}
