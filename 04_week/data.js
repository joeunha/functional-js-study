var _ = require('./partial');


// var items = {id: 1, name: }

var raw_db = `1997<br>1 편지 724,747 1997-11-22 <br>2 접속 674,933 1997-09-13 <br>3 창(노는 계집 창) 411,591 1997-09-13 <br>4 비트 349,781 1997-05-03 <br>5 할렐루야 310,920 1997-08-09 <br>6 넘버 3 297,617 1997-08-02 <br>7 고스트 맘마 257,688 1996-12-21 <br>8 깡패수업 176,757 1996-12-21 <br>9 체인지 167,235 1997-01-18 <br>10 초록물고기 163,655 <br><br>1998<br><br>1 약속 661,174 1998-11-14 <br>2 여고괴담 621,032 1998-05-30 <br>3 8월의 크리스마스 422,930 1998-01-24 <br>4 퇴마록 419,201 1998-08-15 <br>5 미술관 옆 동물원 377,230 1998-12-19 <br>6 조용한 가족 343,946 1998-04-25 <br>7 정사 304,666 1998-10-03 <br>8 처녀들의 저녁식사 290,502 1998-10-03 <br>9 찜 <br><br>1999<br><br>1 쉬리 2,448,399 1999-02-13 <br>2 주유소 습격사건 960,000 1999-10-02 <br>3 텔미썸씽 730,000 1999-11-13 <br>4 인정사정 볼것 없다 687,000 1999-07-31 <br>5 용가리 500,000 1999-07-17 <br>6 해피엔드 464,592 1999-12-11 <br>7 자귀모 420,000 1999-08-14 <br>8 유령 365,000 1999-07-31 <br>9 링 332,354 1999-06-12 <br>10 태양은 없다 329,778 1999-01-01 <br>11 건축무한육면각체의 비밀 177,729 1999-05-01 <br>12 러브 174,000 1999-09-18 <br>13 간첩 리철진 172,474 1999-05-15 <br>14 내마음의 풍금 148,494 1999-03-27 <br>15 노랑머리 117,941 1999-06-26 <br>16 신장개업 100,915 1999-05-01 <br>17 여고괴담 두번째 이야기 100,000 1999-12-24 <br>18 마요네즈 95,875 1999-02-13 <br>19 연풍연가 <br><br>2000<br><br>1 공동경비구역 JSA 2,501,533 2000-09-09 <br>2 반칙왕 787,423 2000-02-04 <br>3 비천무 717,659 2000-07-01 <br>4 단적비연수 616,349 2000-11-10 <br>5 리베라메 530,768 2000-11-11 <br>6 동감 346,279 2000-05-27 <br>7 가위 334,364 2000-07-29 <br>8 거짓말 303,681 2000-01-08 <br>9 박하사탕 290,352 2000-01-01 <br>10 시월애 248,597 2000-09-09 <br>11 아나키스트 236,900 2000-04-29 <br>12 미인 197,015 2000-08-12 <br>13 인터뷰 157,431 2000-04-11 <br>14 하면된다 126,368 2000-10-28 <br>15 행복한 장의사 111,837 2000-01-08 <br>16 춘향뎐 110,358 2000-01-29 <br>17 킬리만자로 95,541 2000-05-20 <br>18 오!수정 90,257 2000-05-27 <br>19 청춘 89,604 2000-10-14 <br>20 해변으로 가다 84,227 2000-08-12 <br>21 싸이렌 62,135 2000-10-28 <br>22 죽거나 혹은 나쁘거나 60,978 2000-07-15 <br>23 플란다스의 개 57,469 2000-02-19 <br>24 순애보 46,148 2000-12-09 <br>25 주노명 베이커리 42,620 2000-01-15 <br>26 신혼여행 36,218 2000-03-11 <br>27 섬 32,137 2000-04-22 <br>28 찍히면 죽는다 30,130 2000-08-26 <br>29 하피 26,591 2000-07-22 <br>30 평화의 시대 23,824 2000-07-15 <br>31 비밀 22,168 2000-06-03 <br>32 물고기자리 15,674 2000-10-21 <br>33 공포택시 14,651 2000-09-30 <br>34 이프 13,591 2000-06-24 <br>35 천일동안(종합병원) 8,881 2000-03-04 <br>36 건드레스 7,128 2000-02-26 <br>37 산책 7,077 2000-03-04 <br>38 진실게임 6,993 2000-03-18 <br>39 베니싱트윈 6,019 2000-09-23 <br>40 컷런스딥 5,831 2000-12-15 <br>41 학교전설 3,503 2000-01-01 <br>42 정 2,632 2000-06-17 <br>43 사슬 2,513 2000-10-07 <br>44 실제상황 2,285 2000-06-24 <br>45 구멍 1,635 2000-03-04 <br>46 봉자 949 2000-11-25 <br>47 스트라이커 938 2000-10-21 <br>48 그림일기 765 2000-04-22 <br>49 깡패수업3 519 2000-03-04 <br>50 집착(아티스트) 317 2000-11-01 <br>51 침향 197 2000-06-10 <br>52 깡패법칙 114 2000-10-07 <br><br>2001<br><br>1 친구 2,579,950 2001-03-31 <br>2 엽기적인 그녀 1,765,100 2001-07-27 <br>3 신라의 달밤 1,605,200 2001-06-23 <br>4 조폭마누라 1,466,400 2001-09-28 <br>5 달마야 놀자 1,306,400 2001-11-08 <br>6 두사부일체 1,215,900 2001-12-14 <br>7 킬러들의 수다 896,500 2001-10-12 <br>8 무사 873,600 2001-09-07 <br>9 화산고 613,300 2001-12-08 <br>10 번지점프를 하다 507,400 2001-02-03 <br>11 선물 461,750 2001-03-24 <br>12 흑수선 414,200 2001-11-16 <br>13 인디안썸머 394,032 2001-05-05 <br>14 봄날은 간다 383,300 2001-09-28 <br>15 하루 294,950 2001-01-20 <br>16 나도 아내가 있었으면 좋겠다 282,400 2001-01-13 <br>17 베사메무쵸 248,000 2001-08-31 <br>18 자카르타 237,700 2000-12-30 <br>19 파이란 230,242 2001-04-28 <br>20 와니와 준하 100,400 2001-11-23 <br>21 와이키키브라더스 89,700 2001-10-26   <br>22 이것이 법이다 87,210 2001-12-21   <br>23 소름 80,700 2001-08-04 <br>24 썸머타임 80,299 2001-05-25 <br>25 불후의 명작 70,200 2000-12-23 <br>26 세이예스 55,200 2001-08-17 <br>27 Go 51,100 2001-11-23 <br>28 교도소월드컵 38,100 2001-05-18 <br>29 휴머니스트 32,140 2001-05-12 <br>30 고양이를 부탁해 28,200 2001-10-13 <br>31 눈물 27,900 2001-01-20 <br>32 노랑머리2 26,440 2001-07-21 <br>33 클럽 버터플라이 25,800 2001-03-03 <br>34 런딤 22,600 2001-11-09 <br>35 천사몽 13,900 2001-02-10 <br>36 수취인불명 10,048 2001-06-02 <br>37 2001 용가리 9,300 2001-01-20 <br>38 그녀에게 잠들다 8,600 2001-03-17 <br>39 별주부 해로 7,516 2001-08-11 <br>40 광시곡 7,000 2001-02-10 <br>41 꽃섬 6,419 2001-11-24 <br>42 더 킹 5,800 2001-05-05 <br>43 나비 5,800 2001-10-13 <br>44 파라다이스 빌라 3,800 2001-12-08 <br>45 아이러브유 3,700 2001-08-25 <br>46 라이방 3,200 2001-11-02 <br>47 7인이 새벽 2,100 2001-02-03 <br>48 대학로에 ... 있다 2,043 2000-12-30 <br>49 헤라퍼플 1,314 2001-11-03 <br>50 스무살 1,300 2001-04-21 <br>51 고추불패 1,011 2001-08-25 <br>52 고해 822 2001-05-25 <br>53 건달의 법칙 813 2001-06-23 <br>54 잎새 604 2001-10-20 <br>55 고추말리기 550 2001-02-10 <br><br>2002<br><br>1 가문의 영광 1,604,219 2002-09-13 <br>2 집으로 1,596,521 2002-04-05 <br>3 색즉시공 1,313,570 2002-12-12 2003년 이월 포함 <br>4 공공의 적 1,161,500 2002-01-25 <br>5 광복절특사 911,315 2002-11-21 <br>6 2009 로스트 메모리즈 882,400 2002-02-02 <br>7 폰 765,000 2002-07-26 <br>8 몽정기 760,698 2002-11-06 <br>9 품행제로 701,624 2002-12-27 2003년 이월 포함 <br>10 YMCA 야구단 617,500 2002-10-03 <br>11 연애소설 589,743 2002-09-13 <br>12 챔피언 567,000 2002-06-28 <br>13 오아시스 558,046 2002-08-15 <br>14 라이터를 켜라 479,177 2002-07-17 <br>15 취화선 443,294 2002-05-10 <br>16 결혼은 미친 짓이다 422,939 2002-04-26 <br>17 해적 디스코왕 되다 411,513 2002-06-07 <br>18 재밌는 영화 376,085 2002-04-12 <br>19 중독 346,453 2002-10-25 <br>20 보스상륙작전 343,256 2002-09-06 <br>21 나쁜 남자 295,600 2002-01-11 <br>22 정글쥬스 285,249 2002-03-22 <br>23 울랄라씨스터즈 245,930 2002-04-26 <br>24 오버 더 레인보우 240,110 2002-05-17 <br>25 피도 눈물도 없이 228,800 2002-03-01 <br>26 좋은 사람 있으면 소개시켜 줘 221,105 2002-08-08 <br>27 묻지마 패밀리 211,900 2002-05-31 <br>28 일단 뛰어 204,600 2002-05-10 <br>29 피아노 치는 대통령 181,870 2002-12-06 <br>30 복수는 나의 것 164,100 2002-03-29 <br>31 밀애 144,602 2002-11-08 <br>32 패밀리 134,310 2002-08-23 <br>33 생활의 발견 127,484 2002-03-22 <br>34 예스터데이 125,000 2002-06-13 <br>35 해안선 121,550 2002-11-22 <br>36 도둑맞곤 못살아 112,198 2002-09-27 <br>37 서프라이즈 110,642 2002-07-05 <br>38 후아유 88,630 2002-05-24 <br>39 쓰리 73,750 2002-08-23 <br>40 하얀방 72,000 2002-11-15 <br>41 성냥팔이소녀의 재림 70,700 2002-09-13 <br>42 2424 69,850 2002-10-18 <br>43 마리이야기 54,404 2002-01-11 <br>44 굳세어라 금순아 41,650 2002-10-18 <br>45 긴급조치 19호 41,034 2002-07-19 <br>46 버스정류장 39,600 2002-03-08 <br>47 유아독존 38,708 2002-11-07 <br>48 네 발가락 35,187 2002-05-17 <br>49 죽어도 좋아 30,187 2002-12-06 <br>50 아이언 팜 28,100 2002-04-19 <br><br>2003<br><br>1 살인의 추억 1,912,725 2003-04-25 <br>2 동갑내기 과외하기 1,630,937 2003-02-07 <br>3 스캔들 - 조선남녀상열지사 1,292,951 2003-10-02 <br>4 올드보이 1,140,000 2003-11-21 <br>5 장화, 홍련 1,017,027 2003-06-13 <br>6 황산벌 960,394 2003-10-17 <br>7 오! 브라더스 952,010 2003-09-04 <br>8 싱글즈 859,347 2003-07-11 <br>9 선생 김봉두 856,680 2003-03-28 <br>10 첫사랑 사수 궐기 대회 741,029 2003-06-27 <br>11 실미도 694,174 2003-12-24 <br>12 위대한 유산 691,839 2003-10-24 <br>13 바람난 가족 636,721 2003-08-14 <br>14 클래식 564,348 2003-01-30 <br>15 와일드 카드 550,174 2003-05-16 <br>16 여고괴담 세번째이야기 여우계단 538,429 2003-08-01 <br>17 조폭마누라2-돌아온 전설 527,575 2003-09-05 <br>18 똥개 434,660 2003-07-16 <br>19 이중간첩 361,580 2003-01-23 <br>20 영어완전정복 330,121 2003-11-05 <br>21 낭만자객 292,190 2003-12-05 <br>22 불어라 봄바람 281,911 2003-09-05 <br>23 오! 해피데이 280,523 2003-04-18 <br>24 국화꽃 향기 278,464 2003-02-28 <br>25 거울속으로 242,958 2003-08-14 <br>26 해피 에로 크리스마스 210,661 2003-12-17 <br>27 청풍명월 191,600 2003-07-16 <br>28 역전에 산다 188,484 2003-06-13 <br>29 4인용 식탁 180,644 2003-08-08 <br>30 나비 173,613 2003-04-30 <br>31 ...ing 159,396 2003-11-28 <br>32 마들렌 146,482 2003-01-10 <br>33 원더풀데이즈 140,080 2003-07-17 <br>34 튜브 123,020 2003-06-05 <br>35 천년호 101,478 2003-11-28 <br>36 동승 100,530 2003-04-11 <br>37 내츄럴 시티 86,531 2003-09-26 <br>38 맛있는 섹스 그리고 사랑 85,100 2003-06-27 <br>39 갈갈이 패밀리와 드라큐라 74,564 2003-08-01 <br>40 대한민국 헌법 제1조 71,646 2003-03-14 <br>41 블루 61,223 2003-02-07 <br>42 남남북녀 55,246 2003-08-29 <br>43 하늘정원 38,773 2003-04-04 <br>44 아카시아 35,660 2003-10-17 <br>45 질투는 나의 힘 33,583 2003-04-18 <br>46 보리울의 여름 33,450 2003-04-25 <br>47 동해물과 백두산이 33,299 2003-12-31 <br>48 지구를 지켜라 32,683 2003-04-04 <br>49 봄 여름 가을 겨울 그리고 봄 28,094 2003-09-19 <br>50 은장도 25,641 2003-10-24`

var raw_genre = `영화 장르
SF 영화
가족 영화
갱스터 영화
공포 영화
괴수 영화
교육 영화
논픽션 영화
다큐멘터리 영화
다큐픽션
단편 영화
드라마 영화
로드 무비
로맨스 영화
로맨틱 코미디 영화
멜로드라마
모큐멘터리
모험 영화
목버스터
뮤지컬 영화
미스터리 영화
반전 영화
버디 영화
범죄 영화
블랙스플로이테이션
서부극
서사 영화
섹스플로이테이션
슈퍼히어로 영화
스너프 필름
스파게티 웨스턴
스포츠 영화
스플래터 영화
식인 영화
실험 영화
에로 영화
엑스플로이테이션 영화
역사 영화
옴니버스 영화
인권 영화
장편 영화
재난 영화
전쟁 영화
종교 영화
청춘 영화
코미디 영화
판타지 영화
패러디 영화
포르노 영화
필름 누아르
핑크 영화
하이스트 영화
호스티스 영화`;

var director = ['봉준호', '박찬욱', '김기덕', '김택용', '강우석', '스티븐 스필버그', '류승완', '임권택', '김지운', '최동훈', '홍상수', '나홍진', '강제규', '이창동', '변영주', '정지영', '장진']

var movie_rating = ['전체관람과', '12세 이상 관람가', '15세 이상 관람가', '청소년 관람불가', '제한관람가'];

var genre = _.go(raw_genre,
  (v)=>v.split('\n'));



var data = _.go(
  raw_db,
  (v)=>v.split('<br>'),
    _.rest(0),
  _.map((v)=>_.rest(v.trim().split(' ')).join(' ')),
  _.filter((v)=>v.length>10 && v.split(' ').length == 3),
  _.reduce((res, v, i)=>{
    var arr = v.split(' ');
    return res.push({
      id: i,
      name: arr[0],
      attendance: arr[1],
      date: arr[2],
      like: _.random(10),
      comment: _.random(50, 1001),
      genre: genre[_.random(genre.length-1)],
      movie_rating: movie_rating[_.random(movie_rating.length-1)],
      director : director[_.random(director.length-1)]
    }), res;
  }, [])
);


var fs = require('fs');

var file = 'data2.js';
fs.open(file, 'w',
  function(err,fd){
  if (err) throw err;
  console.log('file open complete'); }
  );
fs.writeFile('data2.js', JSON.stringify(data), 'utf8',
  function(error){ console.log('write end') }
  );
