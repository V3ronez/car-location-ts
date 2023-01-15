import { ClientTDO } from '../../dtos/client.body';

const clientMapper = ({
  name,
  username,
  email,
  password,
  SSN,
  driver_license,
}: ClientTDO) => {
  return {
    name,
    username,
    email,
    password,
    SSN,
    driver_license,
  };
};

export { clientMapper };
