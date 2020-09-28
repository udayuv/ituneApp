import React, { useState } from "react";
import { connect } from "react-redux";
import CardContainer from "./components/CardContainer";
import { actionCreators } from "./modules/reducer";
import isEmpty from "lodash/isEmpty";
import { Button, Input, Row, Col } from "antd";
import "antd/dist/antd.css";

const App = ({ dispatchRequestApi, songList }) => {
  const [searchKey, setsearchKey] = useState("");

  const handleOnSubmit = (sName) => {
    if (!isEmpty(sName)) {
      dispatchRequestApi(sName);
    } else {
      dispatchRequestApi("itune");
    }
  };
  return (
    <div>
      <br />
      <Row justify="center">
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <Input
            type="text"
            onChange={(evt) => setsearchKey(evt.target.value)}
            placeholder="Enter keyword to search"
          />
        </Col>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <Button type="primary" onClick={() => handleOnSubmit(searchKey)}>
            Search
          </Button>
        </Col>
      </Row>
      <br />
      <br />
      <CardContainer songList={songList.results} count={songList.resultCount} />
    </div>
  );
};

const mapStoreToProps = (store) => {
  return {
    songList: store.searchData
  };
};

const mapDispatchToProps = (dispatch) => {
  const { requestGetApi } = actionCreators;
  return {
    dispatchRequestApi: (repoName) => dispatch(requestGetApi(repoName)),
  };
};

export default connect(mapStoreToProps, mapDispatchToProps)(App);
