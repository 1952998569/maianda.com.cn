<div class="news_div_item">
              <div class="news_div_item_date">
                <div class="news_div_item_year">[field:pubdate function="MyDate('Y',@me)"/]-</div>
                <div class="news_div_item_month">[field:pubdate function="MyDate('m',@me)"/]-</div>
                <div class="news_div_item_day">[field:pubdate function="MyDate('d',@me)"/]</div>
              </div>
              <div class="news_div_item_content">
                <div class="news_div_item_title"><a class="news_div_item_a" href="[field:arcurl/]" title="[field:title /]">[field:title /]</a></div>
                <div class="news_div_item_body">[field:description function="cn_substr(@me,120)"/]...</div>
              </div>
              <div class="news_div_item_pic"> <a href="[field:arcurl/]" title="[field:title /]"> <img src="[field:litpic/]" alt="[field:title /]" class="news_div_item_image"> </a> </div>
            </div>