const advancedResults = (model) => async (parent, args) => {
  let query;

  // Copy req.query
  const reqQuery = { ...args.query };

  // Fields to exclude
  const removeFields = ['page', 'limit'];

  // Loop over removeFields and delete then from reQuery
  removeFields.forEach((param) => delete reqQuery[param]);

  // Find resource
  query = model.find(reqQuery);

  // Pagination
  const page = parseInt(reqQuery.page, 10) || 1;
  const limit = parseInt(reqQuery.limit, 10) || 100;
  const startIndex = (page - 1) * limit;
  // const endIndex = page * limit;
  const total = await model.countDocuments();

  query = query.skip(startIndex).limit(limit);

  const results = await query;

  const pagination = {
    page,
    limit,
    pages: Math.ceil(total / limit),
  };

  return {
    count: results.length,
    pagination,
    items: results,
  };
};

module.exports = advancedResults;
