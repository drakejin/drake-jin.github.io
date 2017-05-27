$("#comment").html(`
    <script>
    function* yo472(){
       talk = [
         '아따 우리 엠띠엔띠 전 회원님은 잘계시나?  (한번 더 눌러)',
         '기왕 스크립팅 장난치는거 재밌게 쳐볼라칸다잉',
         '또 이건 너만 보라고 이러는 거양ㅋㅋㅋ',
         '공든장난 뀨 >   <',
         '요새취업잘안된다기보다그냥',
         '내가 지금 이도 저도 아닌것들을 하는거 같아서 자책감에 힘들드라',
         '넌 요즘 뭐 하고 지내냐',
         'ㅋㅋㅋㅋ카톡보다는 이걸로 말하는게 더 반가울거 같아서 공들여본다.'
       ];
       let index = 0;
       while(index <= talk.length){
           yield talk[index];
           index++;
       }
    }
    talking = yo472();
    </script>
    <a href="javascript:console.log(talking.next().value)"> 이거 누르고 콘솔창 확인하기 </a>
`
);
