import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';


class About extends Component {

    render() {

        return (
            <div className='section-share section-about'>
                <div className='section-about-header'>
                    Truyền thông nói gì về Bookingcare
                </div>
                <div className='section-about-content'>
                    <div className='content-left'>
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/7tiR7SI4CkI"
                            title="BookingCare trên VTV1 ngày 21/02/2018 - Chương trình Cà phê khởi nghiệp"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen>
                        </iframe>
                    </div>
                    <div className='content-right'>
                        <p>
                            Một sáng sớm mùa đông, ba người trong gia đình từ một tỉnh miền Tây Bắc xa xôi đứng xếp hàng lấy số khám bác sĩ chuyên khoa giỏi tại một bệnh viện tư có uy tín ở Hà Nội. Thật không may, đến lượt họ thì số đăng ký khám bác sĩ hôm đó đã hết. Họ bật khóc vì người mẹ già đã chịu đựng quá lâu rồi mà chưa được đăng ký khám.
                            BookingCare là Nền tảng Y tế chăm sóc sức khỏe toàn diện cung cấp nền tảng công nghệ giúp bệnh nhân dễ dàng lựa chọn dịch vụ y tế từ mạng lưới bác sĩ chuyên khoa giỏi, phòng khám/ bệnh viện uy tín với thông tin đã xác thực và đặt lịch nhanh chóng.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,

    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
