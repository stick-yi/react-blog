import { Avatar, Divider } from 'antd'
import '../static/style/components/author.css'

const Author = () => {
  return (
    <div className="author-div comm-box">
      <div> <Avatar size={100} src="../static/imgs/avatar.jpg"  /></div>
      <div className="author-introduction">2年前端，专注于web开发。</div>
      <Divider>社交账号</Divider>
      <Avatar size={28} icon="github" className="account" />
      <Avatar size={28} icon="qq" className="account" />
      <Avatar size={28} icon="wechat" className="account" />
    </div>
  )
}

export default Author
