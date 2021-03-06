import React from 'react';
import styled from 'styled-components';

import AddressRow from './AddressRow';

import { white, blue, darkGray, lightBlue } from '../../utils/colors';

const AddressesView = ({ setViewAddresses, currentAccount }) => {

  return (
    <ValueWrapper>
      <TotalValueHeader style={{ cursor: 'pointer' }} onClick={() => setViewAddresses(false)}>Settings - Addresses</TotalValueHeader>
      <SettingsHeadingItem>Addresses</SettingsHeadingItem>
      <SettingsSection style={{ flexDirection: 'column' }}>
        {currentAccount.addresses.map((address) => (
          <AddressRow flat={true} address={address} />
        ))}
        {currentAccount.changeAddresses.map((address) => (
          <AddressRow flat={true} address={address} />
        ))}
      </SettingsSection>
    </ValueWrapper>
  )
}

const ValueWrapper = styled.div`
  background: ${lightBlue};
  padding: 1.5em;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  border-top: solid 11px ${blue};
`;

const SettingsSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em 0;
  justify-content: space-between;
  padding: 0.5em;
  background: ${white};
  border: 1px solid ${darkGray};
`;

const TotalValueHeader = styled.div`
  font-size: 36px;
`;

const SettingsHeadingItem = styled.h3`
  font-size: 1.5em;
  margin: 64px 0 0;
  font-weight: 400;
  color: ${darkGray};
`;

export default AddressesView;