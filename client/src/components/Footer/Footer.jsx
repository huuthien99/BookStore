import { Row, Col, Card } from 'antd'
import { Link } from 'react-router-dom'
import { FacebookOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons'
// import 'antd/dist/antd.css'

import './footer.css'


function Footer() {
  // const style = { background: '#0092ff', padding: '8px 0' };
  const style = { display: "block", color: 'black', fontSize: '15px' }
  return (
    <div className='footer'>
      <div className='footer-inf'>
        <Row>
          <Col span={6}>
            <div className="site-card-border-less-wrapper">
              <Card title="CHĂM SÓC KHÁCH HÀNG" bordered={false} style={{ width: 300 }}>
                <Link style={style} className='link'>Trung tâm trợ giúp</Link>
                <Link style={style} className='link'>Mail Shop</Link>
                <Link style={style} className='link'>Hướng dẫn khách hàng</Link>
              </Card>
            </div>
          </Col>
          <Col span={6}>
            <div className="site-card-border-less-wrapper">
              <Card title="GIỚI THIỆU" bordered={false} style={{ width: 300 }}>
                <Link style={style} className='link'>Giới thiệu</Link>
                <Link style={style} className='link'>Tuyển dụng</Link>
                <Link style={style} className='link'>Điều khoản</Link>

              </Card>
            </div>
          </Col>
          <Col span={6}>
            <div className="site-card-border-less-wrapper">
              <Card title="DANH MỤC" bordered={false} style={{ width: 300 }}>
                <Link style={style} className='link'>Sách giáo khoa</Link>
                <Link style={style} className='link'>Sách kinh tế</Link>
                <Link style={style} className='link'>Tiểu thuyết</Link>

              </Card>
            </div>
          </Col>
          <Col span={6}>
            <div className="site-card-border-less-wrapper">
              <Card title="THEO DÕI CHÚNG TÔI" bordered={false} style={{ width: 300 }}>
                <Link style={style} className='link'>
                  <FacebookOutlined style={{ fontSize: '18px' }} />
                  <span>Facebook</span>
                </Link>

                <Link style={style} className='link'>
                  < InstagramOutlined style={{ fontSize: '18px' }} />
                  <span>Instagram</span>
                </Link>

                <Link style={style} className='link'>
                  <TwitterOutlined style={{ fontSize: '18px' }} />
                  <span>Twitter</span>
                </Link>
              </Card>
            </div>
          </Col>
        </Row>
      </div>

      <div className='footer-heading'>
        <h2 >&copy;CopyRight 2021</h2>
      </div>
    </div>
  )
}
export default Footer;