import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  categorylistActions,
  getvalidservicecategoryActions,
} from "../store/actions";

const SubCategory = () => {
  const { slug } = useParams();

  const dispatch = useDispatch();

  const [data, setData] = useState();

  const [categoryname, setCategoryname] = useState();

  const getvalidservicecategory = useSelector(
    (state) =>
      state.getvalidservicecategoryReducers?.getvalideservicecategorydata
  );

  const categorylistdata = useSelector(
    (state) => state.getcategorylistReducers?.categorylistdata
  );

  if (!data) {
    categorylistdata.forEach((element) => {
      if (element.slug == slug) {
        setData(element._id);
        setCategoryname(element.name);
      }
    });
  }
  useEffect(() => {
    categorylistActions(dispatch);
    if (data) {
      getvalidservicecategoryActions(dispatch, data);
    }
    setData();
  }, [dispatch, data, slug]);

  return (
    <>
      <section className="category-block">
        <div className="container">
          <div className="categories">
            <ul>
              {categorylistdata
                ? categorylistdata?.map((items, index) => {
                    return (
                      <li key={index}>
                        <Link to={`/category/${items.slug}`} className="">
                          {items.name}
                        </Link>
                      </li>
                    );
                  })
                : null}
            </ul>
          </div>
          <div className="particular-category">
            <h1>{categoryname}</h1>
            {getvalidservicecategory
              ? getvalidservicecategory?.map((items, index) => {
                  return (
                    <div className="services-block" key={index}>
                      <div className="service-wrap">
                        <Link to={`/category/particular/${slug}/${items.slug}`}>
                          <div className="img-wrap">
                            <img
                              src={items.path + items.subcategoryBanner}
                              alt="service"
                            />
                          </div>
                          <div className="service-info">{items.name}</div>
                        </Link>
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </section>
    </>
  );
};

export default SubCategory;
