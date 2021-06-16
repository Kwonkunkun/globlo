import React, { useCallback } from "react";
import { useQuery, useQueryClient } from "react-query";

import { ReactQueryDevtools } from "react-query/devtools";
import CrawledList from "../components/crawledList";
import SearchForm from "../components/searchForm";

import { getYoutubeSearchList } from "../api/api";

const SearchPage: React.FC = (props) => {
  const { status, data, error } = useQuery("searchList", getYoutubeSearchList);

  const renderByStatus = useCallback(() => {
    switch (status) {
      case "loading":
        return <div>Loading...</div>;
      case "error":
        if (error instanceof Error) {
          return <span>Error: {error.message}</span>;
        }
        break;
      default:
        return (
          <>
            <SearchForm />
            <CrawledList data={data} />
          </>
        );
    }
  }, [status]);

  return <>{renderByStatus()}</>;
};

export default SearchPage;
