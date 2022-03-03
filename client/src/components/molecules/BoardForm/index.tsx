import React, { FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useInputs from '@hooks/useInputs';
import { RootState } from '@store/index';
import { createArticle, reset } from '@store/article/action';
import {
  Anonym,
  Attach,
  Container,
  Content,
  ContentContainer,
  Form,
  HashTag,
  OptionContainer,
  Submit,
  TitleContainer,
  TitleInput,
} from './style';

interface Props {
  writeMode: boolean;
}

const BoardForm = ({ writeMode }: Props): JSX.Element => {
  const dispatch = useDispatch();
  const [form, onChange, resetForm] = useInputs({
    title: '',
    content: '',
  });
  const onSubmit = () => {
    dispatch(createArticle(form));
    resetForm();
  };

  useEffect(() => {
    return () => {
      dispatch(reset());
    };
  }, []);
  return (
    writeMode && (
      <Container>
        <Form>
          <TitleContainer>
            <TitleInput
              placeholder="글 제목"
              autoComplete="off"
              name="title"
              value={form.title}
              onChange={onChange}
            />
          </TitleContainer>
          <ContentContainer>
            <Content
              name="content"
              value={form.content}
              onChange={onChange}
              placeholder="에브리타임은 누구나 기분 좋게 참여할 수 있는 커뮤니티를 만들기 위해 커뮤니티 이용규칙을 제정하여 운영하고 있습니다. 위반 시 게시물이 삭제되고 서비스 이용이 일정 기간 제한될 수 있습니다. 
            
            아래는 이 게시판에 해당하는 핵심 내용에 대한 요약 사항이며, 게시물 작성 전 커뮤니티 이용규칙 전문을 반드시 확인하시기 바랍니다. 

            ※ 정치·사회 관련 행위 금지 
            - 국가기관, 정치 관련 단체, 언론, 시민단체에 대한 언급 혹은 이와 관련한 행위 
            - 정책·외교 또는 정치·정파에 대한 의견, 주장 및 이념, 가치관을 드러내는 행위 
            - 성별, 종교, 인종, 출신, 지역, 직업, 이념 등 사회적 이슈에 대한 언급 혹은 이와 관련한 행위 
            - 위와 같은 내용으로 유추될 수 있는 비유, 은어 사용 행위 
            * 해당 게시물은 시사·이슈 게시판에만 작성 가능합니다. 

            ※ 홍보 및 판매 관련 행위 금지 
            - 영리 여부와 관계 없이 사업체·기관·단체·개인에게 직간접적으로 영향을 줄 수 있는 게시물 작성 행위 
            - 위와 관련된 것으로 의심되거나 예상될 수 있는 바이럴 홍보 및 명칭·단어 언급 행위 
            * 해당 게시물은 홍보게시판에만 작성 가능합니다. 

            ※ 그 밖의 규칙 위반 
            - 타인의 권리를 침해하거나 불쾌감을 주는 행위 
            - 범죄, 불법 행위 등 법령을 위반하는 행위 
            - 욕설, 비하, 차별, 혐오, 자살, 폭력 관련 내용을 포함한 게시물 작성 행위 
            - 음란물, 성적 수치심을 유발하는 행위 
            - 스포일러, 공포, 속임, 놀라게 하는 행위 "
            />
          </ContentContainer>
          <OptionContainer>
            <HashTag />
            <Attach />
            <Submit onClick={onSubmit} />
            <Anonym />
          </OptionContainer>
        </Form>
      </Container>
    )
  );
};

export default BoardForm;
