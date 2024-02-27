local logging = require 'logging'

Writer = pandoc.scaffolding.Writer

Writer.Block.Div = function(d)
  logging.temp(d)
  return Writer.Inlines(d.content)
end
