import React from 'react'
import * as S from './style'
import BounceLoader from 'react-spinners/BounceLoader'

const Loading: React.FC = () => (
  <S.Loading>
    <BounceLoader
      color="#E01A4F"
      loading={true}
      speedMultiplier={1}
      size={150}
    />
  </S.Loading>
)
export default Loading;