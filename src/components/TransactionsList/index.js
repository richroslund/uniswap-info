import React from "react";
import { Box, Flex, Text } from "rebass";
import PropTypes from "prop-types";

import Link from "../Link";

import { urls } from "../../helpers";

import data from "./data";
import {
  TokenSwap,
  AddLiquidity,
  RemoveLiquidity
} from "./transactionTypeIcons";

const TransactionType = ({ event }) => {
  switch (event) {
    case "Add Liquidity":
      return <AddLiquidity />;
    case "Remove Liquidity":
      return <RemoveLiquidity />;
    case "Token Swap":
      return <TokenSwap />;
    case "Eth Purchase":
      return "Eth Purchase";
    case "Token Purchase":
      return "Token Purchase";
    default:
      return null;
  }
};

const TransactionItem = ({ transaction }) => (
  <Flex mb={24} justifyContent="space-between">
    <Flex alignItems="center">
      <TransactionType event={transaction.event} />
      <Link
        ml="3"
        color="button"
        external
        href={urls.showTransaction(transaction.tx)}
      >
        {transaction.poolAdjustmentEth} ETH for{" "}
        {transaction.poolAdjustmentToken} DAI
      </Link>
    </Flex>
    <Text color="textDim">1 min ago</Text>
  </Flex>
);

const TransactionsList = ({ transactions }) => (
  <Box p={24}>
    {transactions.map((tx, index) => (
      <TransactionItem key={index} transaction={tx} />
    ))}
  </Box>
);

TransactionsList.defaultProps = {
  transactions: data
};

TransactionsList.propTypes = {
  transactions: PropTypes.array.isRequired
};

export default TransactionsList;