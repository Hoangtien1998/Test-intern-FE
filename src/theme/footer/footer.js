import React from 'react';
import './css.scss';

export default function Footer() {
    return (
        <div className="footer">
            {/* <div className="sub-info">
                <div className="sub-info-left">

                </div>
                <div className="sub-infi-right"></div>
            </div>
            <div className="connects">

            </div> */}
            <table className="table">
                <tr className="header-table">
                    <td style={{ width: '50%' }}>What Happened</td>
                    <td>about us</td>
                    <td>my order</td>
                    <td>my account</td>
                    <td>help</td>
                </tr>
                <tr className="body-table">
                    <td>[공지] 개인 정보 처리 방침 변경 사전 안내</td>
                    <td>회사 소개</td>
                    <td>내 주문 </td>
                    <td>내 주문</td>
                    <td>내 주문</td>
                </tr>
                <tr className="body-table">
                    <td>[공지] 29CM 강남 스토어 영업 종료</td>
                    <td>인재 채용</td>
                    <td>주문 배송</td>
                    <td>내 주문</td>
                    <td>내 주문</td>
                </tr>
                <tr className="body-table">
                    <td>[공지] 개인 정보 처리 방침 변경 사전 안내</td>
                    <td>상시 할인 혜택</td>
                    <td>취소 / 교환 / 반품 내역</td>
                    <td>내 주문</td>
                    <td>내 주문</td>
                </tr>
                <tr className="body-table">
                    <td>[공지] iOS 10 이하 버전 지원 중단 안내</td>
                    <td>상품 리뷰 내역</td>
                    <td>내 주문</td>
                </tr>
                <tr className="body-table">
                    <td>[공지] iOS 10 이하 버전 지원 중단 안내</td>
                    <td>증빙 서류 발급</td>
                    <td>내 주문</td>
                    <td>내 주문</td>
                </tr>

                <tr className="footer-table">
                    <td style={{ opacity: '0.5', paddingTop: '50px' }} colSpan={1}>
                        사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr
                        서울특별시 강남구 도산대로 8길
                    </td>
                    <td style={{ paddingTop: '50px', paddingLeft: '950px' }} colSpan={4}>
                        <img style={{ paddingRight: '5px' }} src="assets/main-banner_2021-10-10/snsicon-01.png" alt="snsicon-01" />
                        <img style={{ paddingRight: '10px' }} src="assets/main-banner_2021-10-10/snsicon-02.png" alt="snsicon-02" />
                        <img src="assets/main-banner_2021-10-10/snsicon-03.png" alt="snsicon-03" />
                    </td>
                </tr>
            </table>
        </div>
    )
}
