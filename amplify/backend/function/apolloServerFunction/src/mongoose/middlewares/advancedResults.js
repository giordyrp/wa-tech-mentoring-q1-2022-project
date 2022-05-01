const advancedResults = (model) => async (parent, args) => {
  let query;

  const reqQuery = { ...args.query };

  const removeFields = ['page', 'limit'];

  removeFields.forEach((param) => delete reqQuery[param]);

  query = model.find(reqQuery);

  const page = parseInt(args.query?.page, 10) || 1;
  const limit = parseInt(args.query?.limit, 10) || 14;
  const startIndex = (page - 1) * limit;

  const total = await model.countDocuments(args.query);

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
