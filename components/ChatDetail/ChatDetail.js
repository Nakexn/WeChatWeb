import { baseUrl } from '../../route/index.js';
import Base from '../Base/Base.js';

export default class ChatDetail extends Base {
  constructor() {
    super();
    this.template = `<div class="content chat-detail">
      <ul class="message-list">
        <li class="item">
          <div class="time">昨天 上午8:30</div>
          <div class="main">
            <ul class="message-group">
              <li class="message-item left">
                <div class="avatar">
                  <a href="./user_profile.html">
                    <img src="${baseUrl}/images/avatar.jpg" alt="avatar" />
                  </a>
                </div>
                <div class="message">
                  “长相思，在长安，络纬秋啼金井阑”。陕西卫视中秋晚会的《诗赋长安》，把朗诵、演唱、舞蹈、乐团、童声跟诗歌融合，在西安这片土地上再次浪漫呈现。夜色温柔，中秋团圆，万千美好，最是良辰美景长安夜。
                </div>
              </li>
              <li class="message-item right">
                <div class="avatar">
                  <a href="./user_profile.html">
                    <img src${baseUrl}/images/avatar_me.jpg" alt="avatar" />
                  </a>
                </div>
                <div class="message">望在哪天，取决于朔的时刻，以及朔望间的时间间隔</div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>`;
    this.$el = this.createNode(this.template);
  }
}
