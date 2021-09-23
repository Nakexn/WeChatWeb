import Base from '../Base/Base.js';
import Link from '../Link/Link.js';

export default class ChatDetail extends Base {
  constructor() {
    super();
    const imgSlot = new Link({
      href: '/wechat/chat/user_profile',
      slot: `<img src="${this.baseUrl}images/avatar.jpg" alt="avatar" />`
    });
    const meImgSlot = new Link({
      href: '/wechat/chat/user_profile',
      slot: `<img src="${this.baseUrl}images/avatar_me.jpg" alt="avatar" />`
    });
    this.template = `<div class="content chat-detail">
      <ul class="message-list">
        <li class="item">
          <div class="time">昨天 上午8:30</div>
          <div class="main">
            <ul class="message-group">
              <li class="message-item left">
                <div class="avatar">${imgSlot.template}</div>
                <div class="message">
                  “长相思，在长安，络纬秋啼金井阑”。陕西卫视中秋晚会的《诗赋长安》，把朗诵、演唱、舞蹈、乐团、童声跟诗歌融合，在西安这片土地上再次浪漫呈现。夜色温柔，中秋团圆，万千美好，最是良辰美景长安夜。
                </div>
              </li>
              <li class="message-item right">
                <div class="avatar">${meImgSlot.template}</div>
                <div class="message">望在哪天，取决于朔的时刻，以及朔望间的时间间隔</div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>`;
    const $el = this.createNode(`<div class="content chat-detail">
        <ul class="message-list">
          <li class="item">
            <div class="time">昨天 上午8:30</div>
            <div class="main">
              <ul class="message-group">
                <li class="message-item left">
                  <div class="avatar"></div>
                  <div class="message">
                    “长相思，在长安，络纬秋啼金井阑”。陕西卫视中秋晚会的《诗赋长安》，把朗诵、演唱、舞蹈、乐团、童声跟诗歌融合，在西安这片土地上再次浪漫呈现。夜色温柔，中秋团圆，万千美好，最是良辰美景长安夜。
                  </div>
                </li>
                <li class="message-item right">
                  <div class="avatar"></div>
                  <div class="message">望在哪天，取决于朔的时刻，以及朔望间的时间间隔</div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>`);
    const $links = $el.querySelectorAll('.avatar');
    $links[0].appendChild(imgSlot.$el());
    $links[1].appendChild(meImgSlot.$el());
    this.$el = $el;
  }
}
