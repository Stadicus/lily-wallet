import React, { useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { VerticalAlignBottom, ArrowUpward } from '@styled-icons/material';
import { StyledIcon } from '../../components';
import { satoshisToBitcoins } from "unchained-bitcoin";

import { white, offWhite, green, gray, lightBlue } from '../../utils/colors';

const UtxoRow = ({ utxo, flat }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <UtxoRowWrapper flat={flat}>
      <UtxoRowContainer flat={flat} isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <AddressWrapper flat={flat}>{utxo.address.address}</AddressWrapper>
        <AmountWrapper flat={flat}>{`${satoshisToBitcoins(utxo.value).toNumber()} BTC`}</AmountWrapper>
      </UtxoRowContainer>
      {isOpen && <TransactionMoreInfo>
        <pre>{JSON.stringify(utxo, null, 2)}</pre>
      </TransactionMoreInfo>}
    </UtxoRowWrapper>
  )
}

const UtxoRowWrapper = styled.div`
  border-bottom: 1px solid ${offWhite};
  background: ${p => p.flat ? 'transparent' : white};
  box-shadow: ${p => p.flat ? 'none' : 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px'};;
  align-items: center;
  flex-direction: column;
`;

const UtxoRowContainer = styled.div`
  display: flex;
  align-items: center;
  padding: ${p => p.flat ? '.75em' : '1.5em'};

  &:hover {
    background: ${p => !p.isOpen && offWhite};
    cursor: pointer;
  }
`;


const TransactionMoreInfo = styled.div`
  display: flex;
  padding: .75em;
  overflow: scroll;
  background: ${lightBlue};
`;

const StyledIconModified = styled(StyledIcon)`
  padding: .5em;
  margin-right: .75em;
  background: ${p => p.receive ? green : gray};
  border-radius: 50%;
`;

const TxTypeIcon = styled.div`
  display: flex;
  flex: ${p => p.flat ? '0 0' : '0 0 10em'};;
  align-items: center;
`;

const TxTypeTextWrapper = styled.div`
  display: ${p => p.flat ? 'none' : 'flex'};
  flex-direction: column;
`;

const TxTypeText = styled.div`
  text-transform: capitalize;
`;


const TxTypeTime = styled.div``;



const AmountWrapper = styled.div`
  display: flex;
  text-align: right;
  justify-content: flex-end;
  font-size: ${ p => p.flat ? '.75em' : '1em'};
`;
const AddressWrapper = styled.div`
  display: flex;
  flex: 1;
  font-weight: 100;
  font-size: ${ p => p.flat ? '.75em' : '1em'};
  word-break: break-all;
`;

export default UtxoRow;