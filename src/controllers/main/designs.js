import Design from '../../models/design';

export function index(req, res, next) {
  const { userId } = req.params;

  return Design.find({ _id: userId })
  .then((designs = []) => res.json(designs))
  .catch(next);
}

export function show(req, res, next) {
  const { userId, designId } = req.params;

  return Design.find({ _id: designId, userId })
  .then(design => {
    if (!design) {
      return res.boom.notFound('No design found');
    }

    return res.json(design);
  })
  .catch(next);
}

export function update(req, res, next) {
  const { designId } = req.params;

  return Design.findOne({ _id: designId })
  .then(design => {
    if (!design) {
      return res.boom.notFound('Design not found');
    }

    _.extend(design, req.body);

    return design.save()
    .then(() => res.json(design));
  })
  .catch(next);
}

export function remove(req, res, next) {
  const { designId } = req.params;

  return Design.findOneAndRemove({ _id: designId })
  .then(() => res.sendStatus(201))
  .catch(next);
}
