import _ from 'lodash';
import Design from '../../models/design';
import User from '../../models/user';
import mongoose from 'mongoose';

export function index(req, res, next) {
  const { userId } = req.params;

  return Design.find({ _id: userId })
  .then((designs = []) => res.json(designs))
  .catch(next);
}

export function show(req, res, next) {
  const { userId, designId } = req.params;

  return Design.findOne({ _id: designId, userId: mongoose.Types.ObjectId(userId) })
  .then(design => {
    if (!design) {
      return res.boom.notFound('No design found');
    }

    return res.json(design);
  })
  .catch(next);
}

export function create(req, res, next) {
  const { userId } = req.params;

  return User.findOne({ _id: userId })
  .then(user => {
    if (!user) {
      return res.boom.notFound('Such user does not exist');
    }

    const design = new Design(req.body);
    design.userId = user._id;

    return design.save()
    .then(newDesign => res.json(newDesign));
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
