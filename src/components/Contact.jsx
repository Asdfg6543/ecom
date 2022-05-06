import React from "react";

const Contact = () => {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-12 text-center my-4 py-4">
          <h1>Bạn có thắc mắc?</h1>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-md 5 d-flex justify-content-center">
          <img
            src="/assets/images/contact.png"
            alt="Contact Us"
            height="300px"
            width="300px"
            />
        </div>
        <div className="col-md-6">
          <form action="">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Tên
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleForm"
                placeholder="User Name"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Địa chỉ Email
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="email@gmail.com"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Nội dung phản hôi
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="5"
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-outline-primary w-100 mt-5"
            >
              Gửi tin nhắn
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
